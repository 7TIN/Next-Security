// app/profile/page.tsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma'; // Make sure you have your prisma instance exported
import EditProfileForm from './edit-profile-form'; // We will create this next

export default async function ProfilePage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If there is no active session, redirect to login
  if (!session) {
    redirect('/login');
  }

  // Fetch the user's profile from your own database using Prisma
  const userProfile = await prisma.profile.findUnique({
    where: { id: session.user.id },
  });

  return (
    <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-2">User Profile</h1>
        <p className="mb-4 text-gray-600">This is your profile page. You can view and edit your information here.</p>

        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <p className="font-semibold text-gray-700">Email:</p>
                <p className="text-gray-900">{session.user.email}</p>
            </div>
            <div className="mb-4">
                <p className="font-semibold text-gray-700">Username:</p>
                <p className="text-gray-900">{userProfile?.username || 'Not set'}</p>
            </div>
             <div className="mb-4">
                <p className="font-semibold text-gray-700">User ID:</p>
                <p className="text-gray-900 text-sm">{session.user.id}</p>
            </div>
        </div>

        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Edit Your Profile</h2>
            {/* The form to update the profile will be a client component */}
            <EditProfileForm userProfile={userProfile} userId={session.user.id} />
        </div>
    </div>
  );
}
