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
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

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
          <div className="flex justify-center">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-15"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
        </CardHeader>
        <CardContent>
          <p>Hello {data.user.email}</p>
          <LogoutButton />
        </CardContent>
      </Card>
    </div>
  );
}
