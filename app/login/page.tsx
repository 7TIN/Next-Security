'use client';

import { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function LoginPage() {
  const supabase = createClientComponentClient();
//   const router = useRouter();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMsg('');
//     setLoading(true);

//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     setLoading(false);

//     if (error) {
//       setErrorMsg(error.message);
//     } else {
//       router.push('/profile');
//     }
//   };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <Link href="/" className="mb-8 text-3xl font-bold text-gray-800">
        MyApp
      </Link>

      <div className="w-full max-w-sm bg-gray-50 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Login</h2>

        {/* {errorMsg && (
          <div className="mb-4 text-red-600 text-sm">{errorMsg}</div>
        )} */}
{/* 
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form> */}

        {/* <div className="mt-4 text-center">
          <p className="text-sm text-gray-600"> Dont have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="my-4 text-center text-gray-500">or</div> */}

        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 border text-gray-900 rounded-md hover:bg-gray-100 "
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
