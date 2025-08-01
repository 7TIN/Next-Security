// lib/actions.ts
'use server';

// import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import prisma from './prisma';
import { revalidatePath } from 'next/cache';
import { getSupabaseServerAction } from './supabase';

// --- AUTH ACTIONS ---

export async function signOut() {
//   const supabase = createServerActionClient({ cookies });
  const supabase = await getSupabaseServerAction();

  await supabase.auth.signOut();
  redirect('/login');
}


export async function updateUsername(userId: string, username: string) {
    if (!userId) {
        throw new Error("User not found.");
    }

    if (!username || username.length < 3) {
        throw new Error("Username must be at least 3 characters long.");
    }
    
    const supabase = await getSupabaseServerAction();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("User not found for fetching email.");
    }

    try {
        await prisma.profile.upsert({
            where: {
                id: userId,
            },
            update: {
                username: username,
            },
           
            create: {
                id: userId,
                username: username,
                email: user.email,
            },
        });

        revalidatePath('/profile');
    } catch (error) {
        console.error("Error updating username:", error);
        throw new Error("Could not update username.");
    }
}
