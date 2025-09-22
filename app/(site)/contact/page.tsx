// /app/contact/page.tsx
'use client';

import Link from "next/link";
import { useState } from "react";
import { ToneBlock } from "@/lib/tone-ui";
import { toneWrapper, toneHeader } from "@/lib/tone";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { CardItem } from "@/components/Pages/TrendCard";
import SectionGrid from "@/components/Pages/SectionGrid";
import ShowcaseSection from "@/components/Pages/ShowcaseSection";
import Image from "next/image";

export default function ContactPage() {
  // فرم ساده (فرانت‌اند). می‌تونی بعداً به /api/contact وصلش کنی.
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: اینجا به یک endpoint دلخواه POST کن
    // fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    alert("پیام شما ثبت شد. (برای ارسال واقعی، endpoint را متصل کنید)");
    setForm({ name: "", email: "", message: "" });
  };
    
    return (
      <main className="container mx-auto px-4 py-12 space-y-12">
      <ShowcaseSection
        title="ارتباط با ما"
        subtitle="سریع، دوستانه و دقیق"
        description="از طریق تلفن و ایمیل در ساعات اداری پاسخ‌گو هستیم. برای درخواست همکاری فرم را پر کنید؛ معمولاً ظرف یک روز کاری برمی‌گردیم. شبکه‌های اجتماعی‌مان هم همیشه باز است."
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

      {/* عنوان صفحه */}
      <section className="text-center" id="contact">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">ارتباط با ما</h1>
      </section>

      {/* سه ستون اصلی */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* شبکه‌های اجتماعی */}
        <div className={toneWrapper("violet", "p-0")}>
          <div className={toneHeader("violet", "text-2xl text-center rounded-t-2xl py-6")}>
            شبکه‌های اجتماعی
          </div>
          <div className="p-6">
            <p className="leading-8 text-muted-foreground mb-6 text-center">
              ما را در شبکه‌ها دنبال کنید.
            </p>

            <ul className="grid gap-3">
              <li>
                <Link
                  href="https://instagram.com/your_handle"
                  target="_blank"
                  className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-black/5 transition"
                  aria-label="Instagram"
                >
                  <div className="flex items-center gap-3">
                    <FaInstagram className="text-xl" />
                    <span>اینستاگرام</span>
                  </div>
                  <span className="text-xs opacity-70">@your_handle</span>
                </Link>
              </li>

              <li>
                <Link
                  href="https://t.me/your_channel"
                  target="_blank"
                  className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-black/5 transition"
                  aria-label="Telegram"
                >
                  <div className="flex items-center gap-3">
                    <FaTelegramPlane className="text-xl" />
                    <span>تلگرام</span>
                  </div>
                  <span className="text-xs opacity-70">@your_channel</span>
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/company/your_company/"
                  target="_blank"
                  className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-black/5 transition"
                  aria-label="LinkedIn"
                >
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="text-xl" />
                    <span>لینکدین</span>
                  </div>
                  <span className="text-xs opacity-70">/company/your_company</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* اطلاعات تماس */}
        <div className={toneWrapper("slate", "p-0")}>
          <div className={toneHeader("slate", "text-2xl text-center rounded-t-2xl py-6")}>
            اطلاعات تماس
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhone className="mt-1" />
                <div>
                  <div className="text-sm opacity-70">تلفن</div>
                  <div className="font-medium ltr text-left">09194220338</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1" />
                <div>
                  <div className="text-sm opacity-70">ایمیل</div>
                  <Link href="mailto:info@abronoakhtar.ir" className="font-medium underline-offset-4 hover:underline">
                    info@abronoakhtar.ir
                  </Link>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <div>
                  <div className="text-sm opacity-70">آدرس</div>
                  <div className="font-medium">
                    تهران، میدان ونک، اتوبان حقانی، پلاک ۴۰
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* فرم تماس */}
        <div id="form" className={toneWrapper("cyan", "p-0")}>
          <div className={toneHeader("cyan", "text-2xl text-center rounded-t-2xl py-6")}>
            فرم تماس
          </div>
          <form onSubmit={onSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                نام و نام خانوادگی
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="مثلاً علی رضایی"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                ایمیل
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300 ltr text-left"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-1">
                پیام شما
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="چطور می‌تونیم کمک کنیم؟"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="rounded-2xl px-5 py-2.5 font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition"
              >
                ارسال پیام
              </button>
            </div>

            {/* یادداشت حریم خصوصی کوتاه */}
            <p className="text-xs opacity-70">
              با ارسال فرم، با <Link href="/privacy" className="underline underline-offset-4">سیاست حریم خصوصی</Link> موافقم.
            </p>
          </form>
        </div>
      </section>

      {/* بلوک پایانی (مشابه درباره ما) */}
      <section className="bg-gradient-to-l from-indigo-50 to-emerald-50 rounded-2xl p-5">
        <div className="text-2xl font-bold font-yekan pt-2 pb-4">همیشه در دسترس</div>
        <p className="leading-8 text-muted-foreground">
          معمولاً طی یک روز کاری پاسخ می‌دهیم. اگر فوری است، لطفاً تماس بگیرید.
        </p>
      </section>
    </main>
    );
}