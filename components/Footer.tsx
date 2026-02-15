"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-primary-dark text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-xs font-semibold text-primary-foreground/40 tracking-widest uppercase mb-6">
                            Executive Engagement
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Ready to structure your <span className="text-accent">next clinical growth phase?</span>
                        </h3>
                        <p className="text-primary-foreground/60 text-lg max-w-md leading-relaxed">
                            I am available for clinical leadership roles and strategic growth consulting in the Swedish healthcare market.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm shadow-sm">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-8">Direct Contact</h4>
                        <div className="space-y-8">
                            <a
                                href="mailto:selmi.takoua@gmail.com"
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest mb-1">Email</p>
                                    <p className="text-lg font-medium text-white hover:text-accent transition-colors">selmi.takoua@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest mb-1">Professional Profile</p>
                                    <p className="text-lg font-medium flex items-center gap-2 text-white hover:text-accent transition-colors">
                                        LinkedIn <ExternalLink size={16} className="text-white/40" />
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest mb-1">Primary Base</p>
                                    <p className="text-lg font-medium text-white">Lund, Sweden</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-white/40">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Available for Clinical Partnership</span>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium mb-1">
                            Takoua Selmi · Clinical Growth Director
                        </p>
                        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
                            Scandinavian Medical Modern · V3.3
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
