"use client";

import { motion } from "framer-motion";
import { Search, Rocket, Settings } from "lucide-react";

const onboardingSteps = [
    {
        title: "Week 1-2: Audit",
        icon: Search,
        description: "Funnel analysis, operational bottleneck identification, and clinical workflow mapping.",
    },
    {
        title: "Week 3-6: Implement",
        icon: Rocket,
        description: "Execution of target growth systems, digital acquisition setup, and quick-win operational fixes.",
    },
    {
        title: "Week 7-12: Standardize",
        icon: Settings,
        description: "Creation of documented pathways, reporting cadence, and scalable patient acquisition channels.",
    },
];

export default function OnboardingPreview() {
    return (
        <section className="py-24 bg-white border-b border-secondary">
            <div className="container mx-auto px-6">
                <div className="max-w-xl mb-16">
                    <h2 className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                        Strategic Onboarding
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-dark">
                        What You Get in 90 Days.
                    </h3>
                    <p className="mt-4 text-secondary-foreground/70">
                        A structured approach to transforming clinical operations and scaling patient acquisition.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {onboardingSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-secondary/30 border border-secondary group hover:border-primary/20 transition-colors"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-secondary flex items-center justify-center mb-6 group-hover:text-primary transition-colors">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-primary-dark mb-4">{step.title}</h4>
                            <p className="text-secondary-foreground/70 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-6 rounded-xl bg-primary/5 border border-primary/10 text-center">
                    <p className="text-sm font-medium text-primary">
                        Note: This reflects a standardized systems-focused approach; adapted for specific clinical requirements.
                    </p>
                </div>
            </div>
        </section>
    );
}
