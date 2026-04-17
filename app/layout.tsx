import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "StillMind | Premium Mental Health Care",
  description:
    "A calm, modern mental health platform experience with therapy, psychiatry, workshops, and guided support."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileStickyCta />
        </div>
      </body>
    </html>
  );
}
