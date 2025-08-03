// // app/profile/page.tsx

// import { redirect } from 'next/navigation';
// import prisma from '@/app/lib/prisma';
// import EditProfileForm from './edit-profile-form'; // We will create this next
// import { createMiddlewareSupabaseClient } from '../lib/supabase/middleware';
// // import { getSupabaseServerComponent } from '../lib/supabase';

// export default async function ProfilePage() {
// //   const supabase = createServerComponentClient({ cookies });
// const supabase = await createMiddlewareSupabaseClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   // If there is no active session, redirect to login
//   if (!user) {
//     redirect('/login');
//   }

//   // Fetch the user's profile from your own database using Prisma
//   const userProfile = await prisma.profile.findUnique({
//     where: { id: user.id },
//   });

//   return (
//     <div className="max-w-4xl mx-auto p-8">
//         <h1 className="text-2xl font-bold mb-2">User Profile</h1>
//         <p className="mb-4 text-gray-600">This is your profile page. You can view and edit your information here.</p>

//         <div className="p-6 bg-white rounded-lg shadow-md">
//             <div className="mb-4">
//                 <p className="font-semibold text-gray-700">Email:</p>
//                 <p className="text-gray-900">{user.email}</p>
//             </div>
//             <div className="mb-4">
//                 <p className="font-semibold text-gray-700">Username:</p>
//                 <p className="text-gray-900">{userProfile?.username || 'Not set'}</p>
//             </div>
//              <div className="mb-4">
//                 <p className="font-semibold text-gray-700">User ID:</p>
//                 <p className="text-gray-900 text-sm">{user.id}</p>
//             </div>
//         </div>

//         <div className="mt-8">
//             <h2 className="text-xl font-semibold mb-4">Edit Your Profile</h2>
//             {/* The form to update the profile will be a client component */}
//             <EditProfileForm userProfile={userProfile} userId={user.id} />
//         </div>
//     </div>
//   );
// }


export default async function ProfilePage() { 
  return (
    <div>
      <h1>
        profile page
      </h1>
    </div>
  )
}