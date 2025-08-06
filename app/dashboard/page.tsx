import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
// import { Button } from "@/components/ui/button";
import LogoutButton from "./LogoutButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[380px] ">
        <CardHeader>
          <CardDescription>
            <div>Dashboard</div>
          </CardDescription>
          {/* <div className="flex justify-center"> */}

          {/* </div> */}
        </CardHeader>
        <CardContent className="space-y-3">
          <Avatar>
            <AvatarImage
              className="rounded-full size-full "
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Email: {data.user.email}</p>
          <LogoutButton />
        </CardContent>
      </Card>
    </div>
  );
}
