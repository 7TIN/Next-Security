// lib/actions.ts
'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import prisma from './prisma';
import { revalidatePath } from 'next/cache';

// --- AUTH ACTIONS ---

export async function signOut() {
  const supabase = createServerActionClient({ cookies });
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

    try {
        await prisma.profile.update({
            where: {
                id: userId,
            },
            data: {
                username: username,
            },
        });
        // Revalidate the profile page to show the new username immediately
        revalidatePath('/profile');
    } catch (error) {
        console.error("Error updating username:", error);
        throw new Error("Could not update username.");
    }
}
