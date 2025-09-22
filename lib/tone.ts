// /lib/tone.ts
import React from "react";
import clsx from "clsx";

export type Tone =
  | "sand"
  | "blue"
  | "sage"
  | "rose"
  | "violet"
  | "teal"
  | "amber"
  | "lime"
  | "slate"
  | "cyan"
  | "indigo"
  | "fuchsia"
  | "orange"
  | "green"
  | "zinc";

export const toneMap: Record<Tone, { wrapper: string; header: string }> = {
  sand: { wrapper: "bg-amber-50/60", header: "bg-amber-100" }, // شبیه شن
  blue: { wrapper: "bg-sky-50/60", header: "bg-sky-100" },
  sage: { wrapper: "bg-emerald-50/60", header: "bg-emerald-100" },
  rose: { wrapper: "bg-rose-50/60", header: "bg-rose-100" },
  violet: { wrapper: "bg-violet-50/60", header: "bg-violet-100" },
  teal: { wrapper: "bg-teal-50/60", header: "bg-teal-100" },
  amber: { wrapper: "bg-yellow-50/60", header: "bg-yellow-100" },
  lime: { wrapper: "bg-lime-50/60", header: "bg-lime-100" },
  slate: { wrapper: "bg-slate-50/60", header: "bg-slate-200" },
  cyan: { wrapper: "bg-cyan-50/60", header: "bg-cyan-100" },
  indigo: { wrapper: "bg-indigo-50/60", header: "bg-indigo-100" },
  fuchsia: { wrapper: "bg-fuchsia-50/60", header: "bg-fuchsia-100" },
  orange: { wrapper: "bg-orange-50/60", header: "bg-orange-100" },
  green: { wrapper: "bg-green-50/60", header: "bg-green-100" },
  zinc: { wrapper: "bg-zinc-50/60", header: "bg-zinc-200" },
};

// کلاس‌های wrapper/header رو سریع بگیر
export function toneWrapper(tone: Tone, extra?: string) {
  return clsx("rounded-2xl p-6 shadow-sm", toneMap[tone].wrapper, extra);
}
export function toneHeader(tone: Tone, extra?: string) {
  return clsx("rounded-xl px-4 py-2 font-semibold", toneMap[tone].header, extra);
}

// یک الگوی چرخشی (برای لیست‌ها/استپ‌ها)
export const cycleTones = (tones: Tone[]) => (index: number) => tones[index % tones.length];

