// --- file: app/(site)/services/[area]/[slug]/page.tsx ---
import SectionGrid from "@/components/Pages/SectionGrid";
import { CardItem } from "@/components/Pages/TrendCard";
import { getItem } from "@/lib/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type RouteParams = { area: string; slug: string };

// متادیتای پویا — بدون پارامتر parent
export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { area, slug } = await params;

  try {
    const svc = await getItem(area, slug);
    if (!svc) return { title: "سرویس پیدا نشد" };

    return {
      title: `${svc.title} | خدمات ما`,
      description: svc.description ?? `جزئیات سرویس ${svc.title}`,
      openGraph: {
        title: `${svc.title} | خدمات ما`,
        description: svc.description ?? `جزئیات سرویس ${svc.title}`,
        type: "article",
      },
      alternates: { canonical: `/services/${area}/${slug}` },
    };
  } catch {
    return { title: `${slug} | خدمات ما`, description: "جزئیات سرویس" };
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { area, slug } = await params;

  let svc: any;
  try {
    svc = await getItem(area, slug);
  } catch (err) {
    throw err;
  }

  if (!svc) return notFound();

  const baseTone: string = svc.tone ?? "sky";

  const items: CardItem[] = [
    {
      id: `${svc.slug}-1`,
      title: "مشاوره رایگان",
      description: "یک جلسه ۳۰ دقیقه‌ای برای نیازسنجی و تعیین دامنه خدمات.",
      tone: "zinc",
    },
    {
      id: `${svc.slug}-2`,
      title: "نمونه خروجی",
      description: "مشاهده نمونه گزارش/تحویل‌دادنی‌های این سرویس.",
      tone: "zinc",
    },
    {
      id: `${svc.slug}-3`,
      title: "برآورد هزینه",
      description: "بر اساس حجم کار و پیچیدگی شما، برآورد هزینه ارائه می‌شود.",
      tone: "amber",
    },
  ];

  return <SectionGrid title={svc.title} items={items} />;
}
