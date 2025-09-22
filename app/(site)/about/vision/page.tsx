'use client';

import { ToneBlock } from "@/lib/tone-ui";
import { toneWrapper, toneHeader } from "@/lib/tone";

export default function VisionPage() {
  return (
    <main className="container mx-auto px-4 space-y-10">
      {/* Vision statement */}
      <section className={toneWrapper("violet")}>
        <div className={toneHeader("violet", "mb-4 text-2xl")}>چشم‌انداز</div>
        <p className="leading-8 text-muted-foreground">
          تبدیل حسابداری به موتور تصمیم‌سازی: جایی که داده‌ی درست، تحلیل به‌موقع و گزارش شفاف، ریسک را کاهش دهد و رشد پایدار بسازد.
        </p>
      </section>

      {/* Pillars */}
      <section className="grid gap-6 md:grid-cols-3">
        <ToneBlock tone="teal" title="زیرساخت داده‌ی قابل اتکا">
          <p className="leading-8 text-muted-foreground">
            کدینگ منطقی، جریان مستندات استاندارد و کنترل داخلی قوی؛ زیرساخت هر تحلیل خوب.
          </p>
        </ToneBlock>
        <ToneBlock tone="amber" title="تحلیل مدیریتی هدف‌مند">
          <p className="leading-8 text-muted-foreground">
            تمرکز بر حاشیه سود، جریان نقد و بهره‌وری؛ KPIها واضح، قابل‌سنجش و هم‌سو با هدف کسب‌وکار.
          </p>
        </ToneBlock>
        <ToneBlock tone="indigo" title="گزارش‌دهی شفاف و ساده">
          <p className="leading-8 text-muted-foreground">
            داشبوردها و گزارش‌هایی که تصمیم را آسان می‌کنند؛ نه صرفاً خوش‌رنگ و پرعدد.
          </p>
        </ToneBlock>
      </section>

      {/* Roadmap */}
      <section className={toneWrapper("zinc")}>
        <div className={toneHeader("zinc", "mb-4 text-2xl")}>نقشه‌ی راه</div>
        <div className="grid gap-6 md:grid-cols-2">
          <ToneBlock tone="lime" title="فاز ۱ — استانداردسازی">
            <ul className="list-disc pr-6 space-y-2 leading-7 text-sm">
              <li>بازبینی فرآیندها و مستندات</li>
              <li>طراحی/اصلاح کدینگ حسابداری</li>
              <li>انتخاب یا تنظیم نرم‌افزار مناسب</li>
            </ul>
          </ToneBlock>

          <ToneBlock tone="cyan" title="فاز ۲ — داشبورد مدیریتی">
            <ul className="list-disc pr-6 space-y-2 leading-7 text-sm">
              <li>تعریف KPIها و موردهای تصمیم</li>
              <li>ساخت گزارش‌های میان‌دوره</li>
              <li>چرخه‌ی بازخورد مدیران</li>
            </ul>
          </ToneBlock>

          <ToneBlock tone="rose" title="فاز ۳ — بهینه‌سازی پیوسته">
            <ul className="list-disc pr-6 space-y-2 leading-7 text-sm">
              <li>پایش لحظه‌ای حساب‌ها</li>
              <li>تحلیل ریسک و سناریو</li>
              <li>بهبود جریان نقد و سودآوری</li>
            </ul>
          </ToneBlock>

          <ToneBlock tone="slate" title="هم‌راستایی استراتژیک">
            <p className="leading-8 text-muted-foreground">
              همه‌ی خروجی‌ها باید با نقشه‌راه رشد کسب‌وکار هم‌راستا باشند؛ تصمیم‌سازی یعنی «انتخاب‌های بهتر، در زمان بهتر».
            </p>
          </ToneBlock>
        </div>
      </section>
    </main>
  );
}
