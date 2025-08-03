
// app/page.tsx


import Link from 'next/link';
import { signOut } from '@/app/lib/actions';
import { createMiddlewareSupabaseClient } from './lib/supabase/middleware';

// import { signOut } from '@/lib/actions'; // Import the server action

export default async function HomePage() {
  // const supabase = createServerComponentClient({ cookies });
  const supabase = await createMiddlewareSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your App
        </h1>
        {user ? (
          <div>
            <p className="text-lg text-gray-600 mb-6">
              You are logged in as <span className="font-semibold">{user.email}</span>.
            </p>
            <div className="flex flex-col space-y-4">
               <Link href="/profile" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Go to Your Profile
               </Link>
               <form action={signOut}>
                  <button type="submit" className="w-full px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                      Sign Out
                  </button>
               </form>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Please log in to continue.
            </p>
            <Link href="/login" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
