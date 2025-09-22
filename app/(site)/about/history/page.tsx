'use client';

import { ToneBlock } from "@/lib/tone-ui";
import { toneWrapper, toneHeader } from "@/lib/tone";

type TimelineItem = {
  year: string;
  title: string;
  points: string[];
  tone?: Parameters<typeof toneWrapper>[0];
};

const timeline: TimelineItem[] = [
  {
    year: "آبان ۱۳۹۸",
    title: "شروع برودار",
    points: [
      "پروژه‌های اولیه در استانداردسازی حسابداری",
      "تمرکز بر صورت‌های مالی ساده و دقیق",
    ],
    tone: "violet",
  },
  {
    year: "۱۳۹۹–۱۴۰۰",
    title: "گسترش خدمات",
    points: [
      "افزودن حسابداری مدیریتی و تحلیل سودآوری",
      "ایجاد پلن‌های پشتیبانی حسابداری",
    ],
    tone: "teal",
  },
  {
    year: "۱۴۰۱–۱۴۰۲",
    title: "سیستم‌سازی و گزارش‌دهی مدیریتی",
    points: [
      "طراحی داشبوردهای تصمیم‌سازی",
      "تدوین فرآیندهای انبارداری، خرید و مالیات",
    ],
    tone: "amber",
  },
  {
    year: "۱۴۰۳ تا امروز",
    title: "همکاری‌های استراتژیک",
    points: [
      "پایش لحظه‌ای حساب‌ها",
      "تحلیل دوره‌ای جریان نقد و حاشیه سود",
    ],
    tone: "indigo",
  },
];

export default function HistoryPage() {
  return (
    <main className="container mx-auto px-4 space-y-10">
      <section className={toneWrapper("violet")}>
        <div className={toneHeader("violet", "mb-4 text-2xl")}>تاریخچه برودار</div>
        <p className="leading-8 text-muted-foreground">
          از آبان ۱۳۹۸ تا امروز، رشد ما با تمرکز بر کیفیت داده و اثربخشی گزارش‌ها رقم خورده است. بخشی از مسیر را در
          این جدول زمانی می‌بینید.
        </p>
      </section>

      <section className="relative pb-12">
        <div className="grid gap-6">
          {timeline.map((t, i) => (
            <div key={t.year} className="grid gap-4 md:grid-cols-[180px_1fr] items-start">
              <div className="md:text-left text-right">
                <span className="inline-block text-sm font-medium opacity-70">{t.year}</span>
              </div>
              <div className={toneWrapper(t.tone ?? "zinc", "border p-0")}>
                <div className={toneHeader(t.tone ?? "zinc", "mb-3 text-lg")}>{t.title}</div>
                <ul className="list-disc pr-6 space-y-2 px-5 pb-5">
                  {t.points.map((p) => (
                    <li className="text-sm leading-7" key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
