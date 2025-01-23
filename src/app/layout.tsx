import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Fondo from "@/components/motion/fondo";


const interFont = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "M21",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased`}
      >
        <Header />
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <Fondo />
          {children}
        </div>
      </body>
    </html>
  );
}
