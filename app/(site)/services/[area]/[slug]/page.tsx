// --- file: app/services/[area]/[slug]/page.tsx (جزئیات هر سرویس) ---
import SectionGrid from "@/components/Pages/SectionGrid";
import { CardItem } from "@/components/Pages/TrendCard";
import { getItem } from "@/lib/services";
import { notFound } from "next/navigation";

export default function ServiceDetailPage({ params }: { params: { area: string; slug: string } }) {
  const svc = getItem(params.area, params.slug);
  if (!svc) return notFound();

  const items: CardItem[] = [
    { id: `${svc.slug}-1`, title: "مشاوره رایگان", description: "یک جلسه ۳۰ دقیقه‌ای برای نیازسنجی و تعیین دامنه خدمات.", tone: svc.tone },
    { id: `${svc.slug}-2`, title: "نمونه خروجی", description: "مشاهده نمونه گزارش/تحویل‌دادنی‌های این سرویس.", tone: "zinc" },
    { id: `${svc.slug}-3`, title: "برآورد هزینه", description: "بر اساس حجم کار و پیچیدگی شما، برآورد هزینه ارائه می‌شود.", tone: "amber" },
  ];

  return <SectionGrid title={svc.title} items={items} />;
}