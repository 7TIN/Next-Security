// app/auth/callback/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    // Create a Supabase client that can read/write cookies
    const supabase = createRouteHandlerClient({ cookies });
    // Exchange the auth code for a user session
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Redirect the user back to the home page after authentication
  return NextResponse.redirect(requestUrl.origin);
}
