// --- file: components/SectionGrid.tsx ---
"use client";
import { TrendCard, CardItem } from "@/components/Pages/TrendCard";
import { motion } from "framer-motion";


export default function SectionGrid({
    title,
    items,
    }: {
        title: string;
        items: CardItem[];
    }) {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
                {title}
            </motion.h1>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                <TrendCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}