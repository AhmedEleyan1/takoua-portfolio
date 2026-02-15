"use client";

import { motion } from "framer-motion";
import { UserCheck, Globe, Zap, MapPin } from "lucide-react";

const scanItems = [
    { label: "Role Fit", value: "Growth Director", icon: UserCheck },
    { label: "Domain", value: "Ophthalmology Clinics", icon: Globe },
    { label: "Strengths", value: "Partnerships • QMS • Digital", icon: Zap },
    { label: "Location", value: "Lund, Sweden", icon: MapPin },
];

export default function RecruiterQuickScan() {
    return (
        <section className="bg-secondary/50 border-y border-secondary-foreground/5 py-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center md:justify-items-start">
                    {scanItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <div className="bg-white p-2 rounded-lg shadow-sm border border-secondary">
                                <item.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-secondary-foreground/50 font-semibold">
                                    {item.label}
                                </p>
                                <p className="text-sm font-medium text-primary-dark whitespace-nowrap">
                                    {item.value}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
