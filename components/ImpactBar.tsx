"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "30%",
        label: "Annual Revenue Growth",
        subtext: "Orchestrated commercial strategy and high-ticket sales at Clinique Ophtalmologique de Tunis.",
    },
    {
        value: "+40%",
        label: "Digital Bookings",
        subtext: "Implemented custom medical CRM and ethical SEO campaigns.",
    },
    {
        value: "360+",
        label: "Congress Attendees",
        subtext: "Organized the 'State of the Art' International Ophthalmology Meeting with 18 international speakers.",
    },
];

export default function ImpactBar() {
    return (
        <section id="impact" className="py-20 bg-primary-dark text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold text-accent tracking-tight">
                                {stat.value}
                            </h3>
                            <p className="text-xl font-medium text-white/90">{stat.label}</p>
                            <p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed">
                                {stat.subtext}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        </section>
    );
}
