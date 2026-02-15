import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as requested
import "./globals.css";
import { cn } from "@/lib/utils"; // Ensure alias works, if not use relative path

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Takoua Selmi | Clinical Growth Director",
  description: "Senior Clinical Growth Director & Business Strategist. Bridging High-Touch Patient Experience with Scalable Clinical Operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans antialiased min-h-screen flex flex-col")}>
        {children}
      </body>
    </html>
  );
}
