"use server";

import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";

// import { updateSession } from "@/utils/supabase/middleware";

const forgotPasswordSchema = z.object({
  email: z.email(),
});

export const forgotPassword = async ({ email }: { email: string }) => {
  const forgotPasswordValidation = forgotPasswordSchema.safeParse({
    email,
  });

  if (!forgotPasswordValidation.success) {
    return {
      error: true,
      message:
        forgotPasswordValidation.error.issues[0]?.message ?? "An error occured",
        
    };
  }

  const supabaseAdmin = createAdminClient();
  
  //find user by all list 

  // const { data: usersList, error: listError } = await supabaseAdmin.auth.admin.listUsers({
    // pagination: { perPage: 100, page: 1 } // Optional, default is 50
  // });

  // Find the user by email
  // const foundUser = usersList?.users?.find(
  //   (user) => user.email?.toLowerCase() === email.toLowerCase()
  // );

  // SQL-Backed .from("users") Query
  const { data: user, error: notFound } = await supabaseAdmin
  .from("users")
  .select("email")
  .eq("email", email)
  .single();


  // if (listError || !foundUser) {
  //   return {
  //     error: true,
  //     message: "No account found with this email address.",
  //   };
  // }

    if (notFound || !user) {
    return {
      error: true,
      message: "No account found with this email address.",
    };
  }


  // supabase authentication from here
  const supabase = await createClient();

  // const { error } = await supabase.auth.resetPasswordForEmail(email);

  const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/forgot-password/reset-password`;
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
  // redirectTo: 'http://localhost:3000/forgot-password/reset-password'
  redirectTo,

});
  // console.log("err: ", error);
  // if (error === null) {
  //   return {
  //     error: true,
  //     message: "No such email registered",
  //   };
  // }

  if (error) {
    return {
      error: true,
      message: error.message,
    };
  }

  // User successfully found
  return {
    success: true,
    message:
      "If an account exists, a password reset email has been sent. Please check your inbox.",
  };
};