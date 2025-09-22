'use client';

import Image from "next/image";
import { ToneBlock } from "@/lib/tone-ui";
import { toneWrapper, toneHeader } from "@/lib/tone";
import ShowcaseSection from "@/components/Pages/ShowcaseSection";
import BenefitSection from "@/components/Pages/Homepage/BenefitSection";

export default function OurStoryPage() {
  return (
    <main className="container mx-auto px-4 space-y-10">
      {/* Hero */}
    <ShowcaseSection
        title="داستان ما"
        subtitle=""
        description=""
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
        label="سنگ بنا"
        title="سنگ‌بنای برودار از یک دغدغه آغاز شد: "
        description="«چطور می‌توان تصمیم‌های مدیریتی را به‌جای حدس و گمان، بر پایه‌ی
              داده‌های قابل‌اعتماد گرفت؟»"
      />
    
    {/* Values */}
      <section className={toneWrapper("zinc")}>
        <div className={toneHeader("zinc", "mb-4 text-2xl")}>سه ارزش اساسی ما</div>
        <div className="grid gap-6 md:grid-cols-3">
            <ToneBlock tone="cyan" title="اعتمادپذیری">
            <p className="leading-8 text-muted-foreground">
                داده‌ها تا وقتی استانداردسازی نشوند، قابل اتکا نیستند. ما با ساخت زیربنای درست، کیفیت داده را تضمین می‌کنیم.
            </p>
            </ToneBlock>
            <ToneBlock tone="cyan" title="شفافیت">
            <p className="leading-8 text-muted-foreground">
                گزارش‌ها باید برای مدیران «روشن و تصمیم‌ساز» باشند، نه صرفاً شلوغ و فنی.
            </p>
            </ToneBlock>
            <ToneBlock tone="cyan" title="اثر measurable">
            <p className="leading-8 text-muted-foreground">
                هر اقدام باید اثر قابل‌اندازه‌گیری روی حاشیه سود، جریان نقد و بهره‌وری داشته باشد.
            </p>
            </ToneBlock>
        </div>
      </section>

        <BenefitSection
            label="شروع مسیر"
            title="مسیر ما با پروژه های حسابداری کوچک شروع شد و "
            description="با پروژه‌های کوچک مشاوره‌ی حسابداری مدیریتی شروع شد و به تدریج با استانداردسازی فرآیندها، طراحی کدینگ، و گزارش‌دهی دقیق، به شریک تصمیم‌سازی مدیران تبدیل شدیم."
        />

      {/* Method */}
      <section className={toneWrapper("zinc")}>
        <div className={toneHeader("zinc", "mb-4 text-2xl")}>سه گام شکل‌گیری همکاری</div>
        <div className="grid gap-6 md:grid-cols-3">
          <ToneBlock tone="rose" title="۱) شناخت">
            <p className="leading-8 text-muted-foreground">
              بررسی نرم‌افزار، مستندات، فرآیندها و نیازهای مدیریتی برای دید دقیق از وضعیت موجود.
            </p>
          </ToneBlock>
          <ToneBlock tone="rose" title="۲) استانداردسازی">
            <p className="leading-8 text-muted-foreground">
              طراحی کدینگ، اصلاح جریان مستندات، تعریف نقش‌ها و انتخاب ابزار مناسب.
            </p>
          </ToneBlock>
          <ToneBlock tone="rose" title="۳) تصمیم‌سازی">
            <p className="leading-8 text-muted-foreground">
              تولید داشبوردها و گزارش‌های مدیریتی، پایش دوره‌ای و بهبود مبتنی بر بازخورد.
            </p>
          </ToneBlock>
        </div>
      </section>
      <section className={`${toneWrapper("violet")} mb-12`}>
        <div className="grid gap-6 md:grid-cols-1 items-center">

          <div className="leading-8 text-muted-foreground">
            <h2 className={`font-bold font-yekan text-2xl py-4 mb-6 ${toneWrapper("violet")}`}>در همین راستا</h2>
            <p>
                گروه حسابداری برودار با بهره گیری از تجربه، دانش و مهارت نیروی انسانی خود کلیه بخش های پایین دستی مربوط به حسابداری از ابتدا که کدینگ، سیستم حسابداری، انتخاب نرم افزار مالی تا رسیدن به گزارشات حسابداری مالی کسب و کار مخاطب خود را ایجاد، اصلاح و یا بهبود و بهینه سازی می نماید تا پس از آماده سازی این زیرساخت ها بخش حسابداری مدیریتی قابل اتکا بر این ساختار به درستی پایه گذاری گردد.
            </p>
            <p className="mt-4">
                داده های حاصل از حسابداری مدیریت، پس از تجزیه و تحلیل های اولیه در اختیار مدیران کسب و کار قرار می گیرند البته گروه حسابداری برودار آماده همراهی و ارائه خدمات مجدد در پردازش داده ها برمبنای بازخورد مدیران می باشد.
            </p>
            <p className="mt-4">
                علاوه بر این گروه حسابداری برودار خدمات مشاوره مدیریتی با بهره مندی از مدیران با تجربه را در صورت نیاز مخاطبین خود نیز ارایه می دهد که بعنوان خدماتی تکمیلی می تواند به رشد و موفقیت کسب و کارهای مخاطب خود کمک نماید.
             </p>
          </div>

        </div>
      </section>
    </main>
  );
}
