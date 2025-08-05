import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
//yeh sirf apna analytics ke liye hai
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elevate",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
