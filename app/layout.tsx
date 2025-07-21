import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import 'react-international-phone/style.css';
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "CDA",
  description: "Cambridge Driving Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <main className="overflow-hidden font-[family-name:var(--font-poppins)] bg-[#F2F0EF]">
          <Header />
          {children}
          <Footer />
        </main>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
