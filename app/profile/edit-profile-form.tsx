// // app/profile/edit-profile-form.tsx
// 'use client';

// import { Profile } from '@prisma/client';
// import { useState } from 'react';
// import { updateUsername } from '@/app/lib/actions'; // We will create this next

// interface EditProfileFormProps {
//     userProfile: Profile | null;
//     userId: string;
// }

// export default function EditProfileForm({ userProfile, userId }: EditProfileFormProps) {
//     const [username, setUsername] = useState(userProfile?.username || '');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         setMessage('Updating...');
//         try {
//             await updateUsername(userId, username);
//             setMessage('Username updated successfully!');
//         } catch (error) {
//             setMessage('Error updating username.');
//             console.error(error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md ">
//             <div className="mb-4">
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                     Username
//                 </label>
//                 <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Choose a username"
//                 />
//             </div>
//             <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//                 Save Changes
//             </button>
//             {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
//         </form>
//     );
// }
