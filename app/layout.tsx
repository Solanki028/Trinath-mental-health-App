import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { LenisProvider } from "@/components/lenis-provider";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Trinath Counselling | Mental Health Care with Heart",
  description:
    "Calm, modern mental health support — therapy, psychiatry, workshops, and guided self-care. A warmer path to wellbeing."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <LenisProvider>
          <div className="relative min-h-screen overflow-x-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <MobileStickyCta />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
