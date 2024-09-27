import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Inter } from "@next/font/google";

// Load the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bikefixup",
  description: "Get the best bike services in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
