"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const cases = [
    {
        title: "Premium Patient Pathways",
        category: "The VIP Revenue Model",
        context: "Head of Marketing & Operations, Clinique Ophtalmologique de Tunis",
        challenge: [
            "Differentiate from public hospitals to capture high-net-worth value",
            "Establish non-clinical value drivers in a medical-first environment"
        ],
        actions: [
            "Designed a dedicated VIP floor with private suites and concierge administration",
            "Developed in-room anesthesia protocols and premium pricing tiers",
            "Established VIP admission workflows and trained staff on service standards",
            "Built a continuous patient feedback loop for premium service refinement"
        ],
        result: "+50% revenue per patient (vs. standard) and increased retention in the VIP segment.",
        systemBuilt: "Repeatable premium pathway framework including admission checklists and pricing trees.",
        proof: "Service design docs, pricing frameworks, and journey maps available on request."
    },
    {
        title: "The 'State of the Art' Congress",
        category: "International Authority & Events",
        context: "Event Lead / Operations Strategist",
        challenge: [
            "Establishing regional clinical leadership in a competitive market",
            "Securing high-level international faculty and industry sponsorship"
        ],
        actions: [
            "Organized a major scientific congress (Oct 2024) with 34 speakers",
            "Secured strategic sponsorships from Zeiss, Alcon, and Bausch & Lomb",
            "Managed international faculty logistics for 18 global speakers",
            "Engineered multi-channel acquisition for 360+ healthcare attendees"
        ],
        result: "360 attendees and solidified brand authority through international faculty presence.",
        systemBuilt: "Event operations manual including sponsorship tiers and speaker management protocols.",
        proof: "Event agendas, speaker lists, and sponsorship agreements available on request."
    },
    {
        title: "Digital Transformation & Compliance",
        category: "Operational Excellence (QMS)",
        context: "Project Manager, QMS Implementation",
        challenge: [
            "Reduce administrative errors and standardize the patient journey",
            "Bridge the digital gap between medical and administrative staff"
        ],
        actions: [
            "Led the 6-month implementation of Qualipro QMS software",
            "Mapped current-state processes and created standardized documentation templates",
            "Trained all department heads on QMS protocols and audit readiness",
            "Established continuous improvement review cycles for medical adherence"
        ],
        result: "Significantly reduced administrative errors and ensured audit readiness.",
        systemBuilt: "Qualipro software integration and a cross-departmental QMS training manual.",
        proof: "Process maps, audit reports, and training certificates available on request."
    },
    {
        title: "Medical Tourism Network",
        category: "Strategic Partnerships",
        context: "Partnerships & Growth Lead",
        challenge: [
            "Expanding patient acquisition beyond local market limitations",
            "Negotiating complex B2B agreements with international insurers"
        ],
        actions: [
            "Negotiated agreements with STAR Assurances and regional embassies",
            "Created scalable patient acquisition channels for France, Nigeria, and Algeria",
            "Established international patient protocols for seamless cross-border care",
            "Built B2B referral system with measurable ROI tracking"
        ],
        result: "Opened scalable patient acquisition channels beyond the local market.",
        systemBuilt: "B2B partnership framework and international patient coordinate protocols.",
        proof: "Embossy agreements and B2B partnership templates available on request."
    },
];

export default function CaseStudies() {
    return (
        <section id="cases" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="max-w-xl mb-16">
                    <h2 className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                        Core Case Studies
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-dark">
                        Proven Growth Strategies.
                    </h3>
                    <p className="mt-4 text-secondary-foreground/60 text-sm italic">
                        Metrics reflect documented outcomes; proof packages available upon request.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {cases.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-secondary group flex flex-col hover:-translate-y-1 hover:border-primary/20"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                                    {project.category}
                                </span>
                                <ArrowUpRight className="text-secondary-foreground/20 group-hover:text-primary transition-colors" size={20} />
                            </div>

                            <h4 className="text-2xl font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-[11px] font-medium text-secondary-foreground/40 uppercase tracking-wider mb-6">
                                {project.context}
                            </p>

                            <div className="space-y-6 text-sm text-secondary-foreground/80 flex-grow">
                                <div>
                                    <h5 className="font-bold text-primary-dark text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                                        Challenge
                                    </h5>
                                    <ul className="space-y-1">
                                        {project.challenge.map((c, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent/30 mt-1.5 flex-shrink-0" />
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-primary-dark text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                                        System Built
                                    </h5>
                                    <p className="text-secondary-foreground/70 leading-relaxed italic">
                                        {project.systemBuilt}
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-secondary">
                                    <p className="text-primary font-bold mb-1">Result:</p>
                                    <p className="text-secondary-foreground font-medium">{project.result}</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-4 border-t border-secondary/50">
                                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1 items-center flex gap-1.5">
                                    <CheckCircle2 size={12} /> Proof Available
                                </p>
                                <p className="text-[10px] text-secondary-foreground/50 leading-tight">
                                    {project.proof}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
