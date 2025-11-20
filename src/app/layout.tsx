import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "PublishX - AI-Powered Content Scheduling & Social Publishing Platform",
  description:
    "Effortlessly create, schedule, and publish content across YouTube, Facebook, Instagram, and LinkedIn using AI-driven workflows. Smarter publishing starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
