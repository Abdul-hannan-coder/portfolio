import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-mono", // Using as the secondary font
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Hannan | Digital Alchemist",
  description: "Portfolio of a creative software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} flex min-h-screen p-4 md:p-8 lg:p-12 gap-8 selection:bg-primary-container selection:text-on-primary-container font-sans antialiased text-foreground bg-background`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
