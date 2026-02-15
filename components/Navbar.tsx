"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Cases", href: "#cases" },
    { name: "Impact", href: "#impact" },
    { name: "Sweden Fit", href: "#sweden-fit" },
    { name: "Contact", href: "#footer" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-semibold tracking-tight text-primary-dark"
                >
                    Takoua Selmi
                </Link>

                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button - Placeholder for now */}
                <button className="md:hidden p-2 text-secondary-foreground">
                    <span className="sr-only">Menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </motion.header>
    );
}
