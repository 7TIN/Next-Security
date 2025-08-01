// lib/supabase.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const getSupabaseServerComponent = () =>
  createServerComponentClient({ cookies });

export const getSupabaseServerAction = () =>
  createServerActionClient({ cookies });

export const getSupabaseRouteHandler = () =>
  createRouteHandlerClient({ cookies });
