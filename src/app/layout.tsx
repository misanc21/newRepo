import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Fondo from "@/components/motion/fondo";
import { Modal } from "@/components/Modal";
import { Provider } from "./context/Context";
import { Contact } from "@/components/header/Contact";

const interFont = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Misanc21",
  description: "Explore my experience",
  openGraph: {
    title: "Misanc21",
    description: "Explore my experience",
    url: "https://misanc21.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://misanc21.vercel.app/logomisanc21.png",
        width: 1200,
        height: 630,
        alt: "My Portfolio",
      },
    ]
  },
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
          <Modal>
            <Contact />
          </Modal>
        </Provider>
      </body>
    </html>
  );
}
