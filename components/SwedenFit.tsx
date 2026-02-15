"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, UserCircle2 } from "lucide-react";

const principles = [
    {
        title: "Clinical Integrity",
        icon: HeartPulse,
        description: "Prioritizing patient outcomes and medical ethics while pursuing commercial growth.",
    },
    {
        title: "GDPR & Privacy First",
        icon: ShieldCheck,
        description: "Deep respect for patient data privacy and Swedish regulatory standards.",
    },
    {
        title: "Value-Led Leadership",
        icon: UserCircle2,
        description: "Aligning with Jantelagen values: excellence driven by collaboration and humility.",
    },
];

export default function SwedenFit() {
    return (
        <section id="sweden-fit" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                            Contextual Alignment
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-primary-dark mb-8">
                            Adapting Value for the <span className="text-primary">Swedish Market.</span>
                        </h3>
                        <p className="text-lg text-secondary-foreground/70 leading-relaxed mb-6 italic">
                            "My growth strategy respects the balance between commercial viability and clinical integrity."
                        </p>
                        <p className="text-secondary-foreground/70 leading-relaxed mb-8">
                            Currently applying these principles in the Swedish ecosystem through projects at Hyper Island. I bring a 'service-first' mindset that respects patient privacy and local cultural nuancing.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <span className="px-5 py-2 bg-secondary rounded-lg text-xs font-bold text-primary-dark uppercase tracking-widest">
                                Hyper Island
                            </span>
                            <span className="px-5 py-2 bg-secondary rounded-lg text-xs font-bold text-primary-dark uppercase tracking-widest">
                                Lund University ecosystem
                            </span>
                            <span className="px-5 py-2 bg-secondary rounded-lg text-xs font-bold text-primary-dark uppercase tracking-widest">
                                GDPR Compliant
                            </span>
                        </div>
                    </motion.div>

                    <div className="grid gap-6">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-secondary/30 border border-secondary hover:border-primary/10 transition-colors group"
                            >
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-secondary flex items-center justify-center shrink-0 group-hover:text-primary transition-colors">
                                        <principle.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-primary-dark mb-2 tracking-tight">
                                            {principle.title}
                                        </h4>
                                        <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
