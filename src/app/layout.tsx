import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Fondo from "@/components/motion/fondo";
import { Modal } from "@/components/header/Modal";
import { Provider } from "./context/Context";

const interFont = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Misanc21",
  description: "portfolio",
  icons: {
    icon: "/public/logomisanc21.png"
  }
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
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Fondo />
        </div>
        <Provider>
          <Header />
          <main className="relative z-30">
            {children}
          </main>
          <Modal />
        </Provider>
      </body>
    </html>
  );
}
