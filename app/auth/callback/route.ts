import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const code = searchParams.get("code"); // Used for signup confirm/magic link
  const next = searchParams.get("next") ?? "/dashboard";

  const supabase = await createClient();

  if (token_hash && type === "recovery") {
    const { error } = await supabase.auth.verifyOtp({
      type: "recovery",
      token_hash,
    });

    if (!error) {
      return redirect("/forgot-password/reset-password");
    } else {
      return redirect("/auth/auth-code-error");
    }
  }

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return redirect(next); // Or redirect to "/dashboard"
    } else {
      return redirect("/auth/auth-code-error");
    }
  }


  return redirect("/auth/auth-code-error");
}
