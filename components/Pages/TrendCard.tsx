// --- file: components/TrendCard.tsx ---
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { toneMap, Tone } from "@/lib/tone";


export interface CardItem {
    id: string;
    title: string;
    description: string;
    href?: string;
    tone: Tone;
}


export function TrendCard({ item }: { item: CardItem }) {
    const tone = toneMap[item.tone];
    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        item.href ? (
        <Link href={item.href} className="block focus:outline-none">
            {children}
        </Link>
        ) : (
        <div>{children}</div>
    );


    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-3xl ${tone.wrapper} shadow-sm ring-1 ring-black/5`}
        >
            <Wrapper>
                <div className={`h-44 sm:h-40 ${tone.header}`}>
                    <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight text-neutral-900 p-6">
                        {item.title}
                    </h3>
                </div>
                <div className="p-6 sm:p-7 sm:py-16">
                    <p className="text-sm sm:text-base leading-7 text-neutral-700">{item.description}</p>
                </div>
            </Wrapper>
        </motion.article>
    );
}