"use client";

import { motion } from "framer-motion";
import { Play, Image as ImageIcon, Users, Calendar, Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

const eventStats = [
    { label: "Attendees", value: 360, icon: Users },
    { label: "Speakers", value: 34, icon: Award },
    { label: "International", value: 18, icon: Calendar },
];

export default function EventMedia() {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const photos = [
        { title: "Event Opening", category: "Reception" },
        { title: "Scientific Session", category: "Keynote" },
        { title: "Industry Exhibition", category: "Partners" },
        { title: "Panel Discussion", category: "Q&A" },
        { title: "Networking Lunch", category: "B2B" },
        { title: "Closing Ceremony", category: "Awards" },
    ];

    return (
        <section id="event-media" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                            Visual Archive
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">
                            State of the Art <span className="text-primary italic">International Meeting.</span>
                        </h3>
                        <p className="text-lg text-secondary-foreground/70 leading-relaxed">
                            A visual record of the meeting I led—capturing speaker quality, attendance energy, and brand presence.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <span className="px-4 py-2 bg-white border border-secondary rounded-full text-xs font-semibold text-primary uppercase tracking-wider shadow-sm">
                            Congress
                        </span>
                        <span className="px-4 py-2 bg-white border border-secondary rounded-full text-xs font-semibold text-primary uppercase tracking-wider shadow-sm">
                            Leadership
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Video Feature */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 relative group cursor-pointer aspect-video bg-primary-dark rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-20 h-20 bg-primary/95 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <Play fill="currentColor" size={32} className="ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-bold text-xl uppercase tracking-wider flex items-center gap-3">
                                Highlight Reel <span className="text-xs font-normal text-white/60 tracking-normal">• 25–26 Oct 2024 • Tunis</span>
                            </p>
                        </div>
                        {/* Visual Grain Effect Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                    </motion.div>

                    {/* Event Snapshot */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl border border-secondary shadow-sm flex flex-col justify-between"
                    >
                        <div>
                            <h4 className="text-xs font-semibold text-accent uppercase tracking-widest mb-6">Event Snapshot</h4>
                            <div className="space-y-6">
                                {eventStats.map((stat, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="p-3 bg-secondary rounded-xl text-primary">
                                            <stat.icon size={20} />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary-dark tracking-tight flex items-center">
                                                <AnimatedCounter value={stat.value} />
                                            </div>
                                            <p className="text-xs text-secondary-foreground/50 font-medium uppercase">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-secondary">
                            <p className="text-sm font-medium text-primary-dark mb-2">Key Responsibilities:</p>
                            <p className="text-xs text-secondary-foreground/70 leading-relaxed mb-6">
                                Program • Speaker Management • Sponsorship (Zeiss, Alcon, Bausch & Lomb) • Operations
                            </p>
                            <button className="w-full flex items-center justify-center gap-2 py-3 border border-primary/20 text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-colors">
                                REQUEST MEDIA PACK
                                <ExternalLink size={14} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Photo Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {photos.map((photo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] bg-white border border-secondary rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                <ImageIcon className="text-secondary-foreground/10 group-hover:text-primary/20 transition-colors mb-2" size={24} />
                                <p className="text-[10px] font-bold text-primary-dark leading-tight uppercase tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">
                                    {photo.title}
                                </p>
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xs text-secondary-foreground/40 italic">
                        * Additional proof (agendas, sponsor decks, certificates) available upon request.
                    </p>
                </div>
            </div>
        </section>
    );
}
