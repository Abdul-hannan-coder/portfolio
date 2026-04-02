import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "block",
});

const manrope = Manrope({
  variable: "--font-mono", // Using as the secondary font
  subsets: ["latin"],
  display: "block",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abdulhannan.dev'),
  title: {
    default: "Abdul Hannan | Full Stack Automation Developer",
    template: "%s | Abdul Hannan",
  },
  description: "Portfolio of Abdul Hannan, a Full Stack Automation Developer specializing in Next.js, GoHighLevel, n8n, and intelligent business automations.",
  keywords: ["Abdul Hannan", "Full Stack Developer", "Automation Expert", "GoHighLevel Expert", "n8n", "Next.js", "React", "Tailwind CSS", "Marketing Funnels", "SaaS Developer"],
  authors: [{ name: "Abdul Hannan" }],
  creator: "Abdul Hannan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulhannan.dev",
    title: "Abdul Hannan | Full Stack Automation Developer",
    description: "Architecting custom software solutions and high-converting marketing funnels.",
    siteName: "Abdul Hannan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Hannan | Full Stack Automation Developer",
    description: "Architecting custom software solutions and high-converting marketing funnels.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet"/>
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
