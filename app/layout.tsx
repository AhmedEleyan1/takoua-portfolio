import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";

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
        <SmoothScroll />
        {children}
        {/* Cinematic Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[100]" />
      </body>
    </html>
  );
}
