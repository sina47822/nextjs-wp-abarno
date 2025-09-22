'use client'
import BenefitSection from "@/components/Pages/Homepage/BenefitSection";
import SectionGrid from "@/components/Pages/SectionGrid";
import ShowcaseSection from "@/components/Pages/ShowcaseSection";
import { CardItem } from "@/components/Pages/TrendCard";


import { toneWrapper, toneHeader, cycleTones, type Tone } from "@/lib/tone";
import { ToneBlock } from "@/lib/tone-ui";

import Image from "next/image";

export default function AboutUsPage() {
  const items: CardItem[] = [
    { id: "a0", title: "داستان ما", description: "سنگ‌بنای گندم چطور شکل گرفت.", tone: "violet", href: "/about/ourstory" },
    { id: "a1", title: "تاریخچه", description: "از آبان ۱۳۹۸ تا امروز؛ مسیر رشد ما.", tone: "violet", href: "/about/history" },
    { id: "a2", title: "تیم ما", description: "با متخصصان ما آشنا شوید.", tone: "violet", href: "/about/team" },
    { id: "a3", title: "چشم‌انداز", description: "تصمیم‌سازی مبتنی بر داده برای مدیران.", tone: "violet", href: "/about/vision" },
  ];

  const services = [
    "ایجاد و یا اصلاح ساختار روال‌های حسابداری",
    "ایجاد سیستم‌سازی بخش مالی شرکت‌ها",
    "آموزش نیروی حسابدار مستقر",
    "گزارش‌های مالی و حسابداری میان‌دوره",
    "پایش داده‌های حسابداری مدیریتی",
    "تجزیه و تحلیل داده‌ها",
    "مشاوره کسب‌وکار",
  ];

  const process = [
    {
      title: "۱) بررسی اولیه کار",
      points: [
        "نرم‌افزار",
        "مستندات",
        "سابقه کار حسابدار",
        "طرز تفکر مدیریت",
        "چالش‌ها و مشکلات",
        "نیازسنجی",
      ],
    },
    {
      title: "۲) مشاوره درست شرایط کار حسابداری",
      points: [
        "مشاوره مالی، حسابداری مدیریتی",
        "مشاوره امور مالیاتی",
        "مصاحبه و استخدام نیروی حسابدار",
        "بررسی سیستم‌ها و فرآیندهای مالی و ارائه پیشنهاد",
        "طراحی و تدوین سیستم‌های حسابداری و انبارداری",
      ],
    },
    {
      title: "۳) راه‌اندازی حسابداری",
      points: [
        "انتخاب نرم‌افزار",
        "سیستم‌گذاری تیم مالی",
        "سیستم‌گذاری اداری و روند مستندات",
        "شناخت برنامه ورود اطلاعات",
        "انبارگردانی، سیستم بارکد و کدینگ انبار",
        "جمع‌آوری مدارک",
        "کدینگ حسابداری مطابق با گزارش‌های مدیریت",
        "ثبت و ورود اطلاعات تا تاریخ موردنظر",
      ],
    },
    {
      title: "۴) پشتیبانی حسابداری",
      points: [
        "پشتیبانی متناسب با کسب‌وکار",
        "کنترل و مغایرت بانکی",
        "کلیه امور سامانه مودیان",
        "کلیه امور سامانه جامع تجارت",
        "امور بیمه و ارسال لیست تأمین اجتماعی",
        "لیست مالیات بر حقوق",
        "بستن حساب‌ها و اصلاحات پایان سال",
        "انجام امور شرکت‌های بازرگانی، پیمانکاری، صنعتی، خدماتی",
        "تهیه و تنظیم دفاتر قانونی (روزنامه، کل و …)",
        "اظهارنامه عملکرد و ارزش افزوده",
        "گزارش‌های فصلی",
        "امور پرونده‌های پرسنل و نگهداری آن‌ها",
        "پیگیری و رفع مسائل پرونده مالیاتی",
      ],
    },
    {
      title: "۵) نظارت، گزارش‌دهی و مشاوره",
      points: [
        "نظارت بر اسناد حسابداری",
        "گزارش‌های مالی میان‌دوره و سالانه",
        "نظارت و کنترل لحظه‌ای حساب‌ها",
        "تحلیل صورت‌های مالی (سود و زیان، ترازنامه و …)",
      ],
    },
  ];

    // تون‌های متناوب برای استپ‌ها
  const pickStepTone = cycleTones(["violet"]);

  return (
    <>
      <ShowcaseSection
        title="ما که هستیم؟"
        subtitle="گروه حسابداری ما — حسابداری برای مدیران"
        description="ما معتقدیم ستون‌های هر کسب‌وکار با «تصمیمات صحیح» به‌هم متصل می‌شود. مأموریت ما این است که با داده‌های معتبر و تحلیل حسابداری مدیریتی، تصمیم‌سازی مدیران را دقیق، کم‌ریسک و اثربخش کنیم."
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

      {/* بخش مزایا */}
      <BenefitSection
        label="چرا گندم؟"
        title="فرآیندهای مالی شفاف، تصمیم‌های مطمئن"
        description="با استانداردسازی ساختار حسابداری و استقرار حسابداری مدیریتی، خطاها کاهش می‌یابد، گزارش‌ها قابل اتکا می‌شوند و زمان مدیریت برای تصمیم‌گیری آزاد می‌گردد."
      />

      {/* فلسفه داده‌محور */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <ToneBlock tone="slate" title="فلسفه ما" className="col-span-2">
            <p className="leading-8 text-muted-foreground">
              آنچه مدیران نیاز دارند «داده‌های قابل اعتماد» برای تصمیم‌گیری است. ما با تکیه بر حسابداری مدیریتی،
              اطلاعات کمی و کیفی واقعیِ کسب‌وکار را گردآوری و به تحلیل‌های قابل‌سنجش تبدیل می‌کنیم تا ریسک تصمیمات
              کاهش یابد و مسیر رشد هموار شود.
            </p>
            <p className="leading-8 mt-4">
              بهره‌گیری از حسابداری مدیریتی مستلزم بنیانِ درستِ حسابداری مالی است؛ بنابراین ابتدا زیرساخت‌های حسابداری
              (کدینگ، انتخاب نرم‌افزار، سیستم‌ها و فرآیندها) را ایجاد/اصلاح می‌کنیم و بر آن پایه، گزارش‌دهی مدیریتی را
              بنا می‌گذاریم.
            </p>
          </ToneBlock>
          <ToneBlock tone="rose" title="مؤسس و مدیر">
            <p className="leading-8">
              سرکار خانم <strong>گندم برنو</strong> با تعهد، سخت‌کوشی و تخصص حسابداری، همراه و شریک مطمئن کسب‌وکارهای
              مخاطب گندم هستند.
            </p>
          </ToneBlock>
        </div>
      </section>

      {/* خدمات */}
      {/* خدمات برتر با تون آبی */}
      <section className="container mx-auto px-4 py-12">
        <div className={toneWrapper("blue")}>
          <div className={toneHeader("blue", "mb-4 text-2xl")}>خدمات برتر ما</div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 list-disc pr-6">
            {services.map((s) => (
              <li key={s} className="leading-8">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* فرآیند همکاری (چارت خدمات گندم) */}
      {/* فرآیند همکاری با تون‌های متناوب برای هر استپ */}
      <section className="container mx-auto px-4 py-12">
        <div className={toneWrapper("zinc")}>
          <div className={toneHeader("zinc", "mb-6 text-2xl")}>چارت خدمات حسابداری گندم</div>
          <div className="grid gap-6 md:grid-cols-2">
            {process.map((step, idx) => {
              const tone = pickStepTone(idx);
              return (
                <div key={idx} className={toneWrapper(tone, "border p-0")}>
                  <h3 className={toneHeader(tone, "mb-3 text-lg")}>{step.title}</h3>
                  <ul className="list-disc pr-5 space-y-2 px-5 pb-5">
                    {step.points.map((p) => (
                      <li key={p} className="text-sm leading-7">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* تاریخچه و لینک‌های تکمیلی */}
      <SectionGrid title="درباره گندم" items={items} />

      {/* بلوک اعتبار و همراهی (می‌تونی به ToneBlock هم تبدیلش کنی) */}
      <section className="container mx-auto px-4 py-12">
        <div className="rounded-2xl bg-gradient-to-l from-emerald-50 to-indigo-50 p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">همراه تصمیم‌های بزرگ شما</h2>
          <p className="mx-auto max-w-3xl leading-8 text-muted-foreground">
            داده‌های حسابداری مدیریتی پس از تحلیل اولیه در اختیار مدیران قرار می‌گیرد و بر اساس بازخورد شما، تحلیل‌ها
            تکمیل و به تصمیم‌های عملیاتی تبدیل می‌شوند. هدف ما، رشد پایدار و موفقیت قابل‌اندازه‌گیری کسب‌وکار شماست.
          </p>
        </div>
      </section>
    </>
  );
}
