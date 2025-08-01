// app/login/page.tsx
'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';

export default function LoginPage() {
  const supabase = createClientComponentClient();

  return (
    <>
      <div id="AuthPage" className="w-full h-[100vh] bg-white">
        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          <Link href="/" className="min-w-[170px]">
            {/* You can replace this with your own logo SVG */}
            <h1 className="text-2xl font-bold text-gray-800">MyApp</h1>
          </Link>
        </div>

        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          Login / Register
        </div>

        <div className="max-w-[400px] mx-auto px-2 mt-10">
            {/* This is the pre-built Supabase Auth component */}
            <Auth
                onlyThirdPartyProviders
                redirectTo={`${location.origin}/auth/callback`}
                supabaseClient={supabase}
                providers={['google']}
                appearance={{ theme: ThemeSupa }}
            />
        </div>
      </div>
    </>
  );
}
