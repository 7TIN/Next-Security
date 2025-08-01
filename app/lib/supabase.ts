// lib/supabase.ts
import {
  createServerComponentClient,
  createServerActionClient,
  createRouteHandlerClient,
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const getSupabaseServerComponent = () =>
  createServerComponentClient({ cookies: () => cookies() });

export const getSupabaseServerAction = () =>
  createServerActionClient({ cookies: () => cookies() });

export const getSupabaseRouteHandler = () =>
  createRouteHandlerClient({ cookies: () => cookies() });
