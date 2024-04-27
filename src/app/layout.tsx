import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const mainFont = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ethancreates | full-stack/front-end web developer",
  description:
    "Ethan's a reliable full-stack web developer that loves design and the front-end part of creating websites!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          mainFont.className,
          "antialiased  h-screen bg-gradient-to-b from-slate-900 from-10% via-slate-950 via-50%  to-slate-900 to-100%  text-white overflow-x-clip no-scrollbar",
        )}
      >
        <Navbar />

        {children}

        <Script
          defer
          src="https://umami.ethancreates.dev/script.js"
          data-website-id="59ec0a22-e63f-4ad0-a4b9-a8995cb016d8"
        />
      </body>
    </html>
  );
}
