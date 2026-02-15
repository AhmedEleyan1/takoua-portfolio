"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-secondary/30 to-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-l-full translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary font-medium tracking-wide text-xs mb-4 uppercase">
                            Clinical Growth Systems for Specialty Eye Care
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-semibold text-primary-dark leading-tight mb-6">
                            Building scalable <span className="text-primary">patient acquisition</span> and operational excellence.
                        </h1>
                        <p className="text-lg text-secondary-foreground/80 max-w-lg mb-8 leading-relaxed">
                            Bridging high-touch patient experience with commercial discipline. Specializing in clinical operations and strategic growth for ophthalmology.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#cases"
                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                            >
                                View Growth Cases
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#footer"
                                className="inline-flex items-center gap-2 bg-white border border-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Visual / Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-square md:aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-white/50"
                >
                    {/* Ideally replace with an actual image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-400 p-8 text-center uppercase tracking-widest leading-loose">
                        <span className="text-xs font-semibold mb-2">Visual Proof</span>
                        <span className="text-[10px]">[Professional Headshot or Minimalist Clinical Archive]</span>
                    </div>
                    {/* Decorative Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
