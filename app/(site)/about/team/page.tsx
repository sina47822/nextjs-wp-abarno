'use client';

import Image from "next/image";
import { ToneBlock } from "@/lib/tone-ui";
import { toneWrapper, toneHeader } from "@/lib/tone";
import ShowcaseSection from "@/components/Pages/ShowcaseSection";
import Link from "next/link";

type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  tone?: Parameters<typeof toneWrapper>[0];
};

const members: Member[] = [
  {
    id: "m-gn",
    name: "گندم برنو",
    role: "مؤسس و مدیر",
    bio: "تمرکز بر حسابداری مدیریتی، استانداردسازی فرآیندها و تصمیم‌سازی مبتنی بر داده.",
    avatar: "/images/avatars/ceo.jpg",
    tone: "rose",
  },
  {
    id: "m-fa",
    name: "فائزه رضایی",
    role: "کارشناس ارشد حسابداری",
    bio: "طراحی کدینگ، کنترل اسناد و تهیه گزارش‌های میان‌دوره.",
    avatar: "/images/avatars/f1.jpg",
    tone: "teal",
  },
  {
    id: "m-am",
    name: "امیر محمدی",
    role: "تحلیل‌گر داده",
    bio: "مدلسازی سود و زیان، تحلیل جریان نقد و داشبوردهای مدیریتی.",
    avatar: "/images/avatars/m1.jpg",
    tone: "indigo",
  },
];

export default function TeamPage() {
  return (
    <main className="container mx-auto px-4 space-y-10">
      <ShowcaseSection
        title="تیم ما"
        subtitle=""
        description="ما ترکیبی از تخصص مالی، تحلیل داده و تجربه‌ی عملیاتی هستیم؛ تمرکزمان ارائه‌ی گزارش‌های تصمیم‌ساز برای مدیران است."
        showCta={false}
        media={
          <Image
            src="/images/landscape/landscape4.jpg"
            alt="about us"
            width={1600}
            height={900}
            className="rounded-2xl object-cover"
            priority
          />
        }
      />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <ToneBlock key={m.id} tone={m.tone ?? "zinc"} title={m.name}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-zinc-100">
                <Image
                    src={m.avatar ?? "/images/avatars/placeholder.jpg"}
                    alt={m.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-medium opacity-80">{m.role}</div>
              </div>
            </div>
            <p className="leading-7 text-muted-foreground">{m.bio}</p>
          </ToneBlock>
        ))}
      </section>

      <section className={`mb-12 ${toneWrapper("zinc")}`}>
        <div className={toneHeader("zinc", "mb-3 text-xl")}>چطور همکاری می‌کنیم؟</div>
        <p className="leading-8 text-muted-foreground">
          برای هر پروژه یک لید تخصصی (حسابداری یا داده) و یک PM می‌گذاریم؛ مسیر کار شفاف، قابل پیگیری و مستندسازی‌شده است.
          <span className="text-gray-700 hover:text-blue-300 cursor-pointer px-2 text-sm">
            <Link href="/about">
              جزئیات بیشتر
            </Link>
            </span>
        </p>
      </section>
    </main>
  );
}
