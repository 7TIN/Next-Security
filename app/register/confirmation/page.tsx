import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function RegistrationConfirmation() {
  
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#f9f9f9] px-4">
      <Card className="w-full max-w-md rounded-xl shadow-sm border border-gray-200 text-center">
        <CardHeader className="flex flex-col items-center mt-6 space-y-4">

          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User"
                className="rounded-lg"
              />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-xl font-semibold text-black">
            Confirm your email address
          </h1>
        </CardHeader>

        <CardContent className="px-6 pb-8">
          {/* Small Email Icon */}
          <div className="flex justify-center mb-4">
            <Mail className="h-5 w-5 text-gray-600" />
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mb-4">
            Please click the button below to confirm that{" "}
            <strong>hello@SmilesDavis.yeah</strong> is the correct email address
            to receive my newsletter.
          </p>

          {/* Button */}
          <button className="w-full bg-black text-white py-2 px-4 rounded-md text-sm font-medium transition hover:opacity-90 mb-6">
            Confirm your email
          </button>

          {/* Footer Note */}
          <p className="text-xs text-gray-500">
            If you didn&apos;t subscribe, you can just delete this email. You
            will not be subscribed to this newsletter unless you click the
            confirmation button above.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
