"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skills = [
    "Clinical Operations",
    "Medical Tourism",
    "B2B Partnerships",
    "GDPR Compliance",
    "Patient Experience Design",
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
                            The Hybrid Profile
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                            From Tunis to Lund: Global Precision.
                        </h3>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6 text-lg text-secondary-foreground/80 leading-relaxed">
                                <p>
                                    I offer a unique dual-background: the high-touch service standards of luxury retail (Rolex) and the operational rigor of clinical healthcare.
                                </p>
                                <p>
                                    Currently a Business Development student at Hyper Island in Sweden, I specialize in scaling clinics through digital transformation, B2B insurance partnerships, and ISO-standard quality management.
                                </p>
                            </div>

                            <div className="bg-secondary p-8 rounded-2xl border border-secondary-foreground/5 shadow-sm">
                                <h4 className="text-xl font-semibold text-primary-dark mb-6">Key Capabilities</h4>
                                <ul className="space-y-4">
                                    {skills.map((skill, index) => (
                                        <li key={index} className="flex items-center gap-3 text-secondary-foreground">
                                            <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
