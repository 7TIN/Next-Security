import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supabase Login by google",
  description: "Supabase login by Google",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* use this if you want the navbar */}
        <SidebarProvider>
          
          <main className="flex h-screen w-full">
            <SidebarTrigger />

            {/* Full-width container for children */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md px-4">{children}</div>
            </div>
          </main>
          <AppSidebar />
        </SidebarProvider>

        {/* this is for no navbar */}
        {/* <main>
            {children}
          </main> */}

        <Toaster />
      </body>
    </html>
  );
}
