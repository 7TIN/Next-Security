// lib/actions.ts
'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import prisma from './prisma';
import { revalidatePath } from 'next/cache';
import { getSupabaseServerAction } from './supabase';

// --- AUTH ACTIONS ---

export async function signOut() {
//   const supabase = createServerActionClient({ cookies });
  const supabase = getSupabaseServerAction();

  await supabase.auth.signOut();
  redirect('/login');
}


// --- PROFILE ACTIONS ---

export async function updateUsername(userId: string, username: string) {
    if (!userId) {
        throw new Error("User not found.");
    }

    if (!username || username.length < 3) {
        throw new Error("Username must be at least 3 characters long.");
    }
    
    // In case the trigger failed, we need the user's email for the create operation
    const supabase = createServerActionClient({ cookies });
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("User not found for fetching email.");
    }

    try {
        // Use upsert: update if profile exists, create if it doesn't.
        await prisma.profile.upsert({
            where: {
                id: userId,
            },
            // What to do if the record is found
            update: {
                username: username,
            },
            // What to do if the record is NOT found
            create: {
                id: userId,
                username: username,
                email: user.email, // Populate email on creation
            },
        });
        // Revalidate the profile page to show the new username immediately
        revalidatePath('/profile');
    } catch (error) {
        console.error("Error updating username:", error);
        throw new Error("Could not update username.");
    }
}
