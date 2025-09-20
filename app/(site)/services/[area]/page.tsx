// --- file: app/services/[area]/page.tsx (دسته‌بندی‌ها) ---
import SectionGrid from "@/components/Pages/SectionGrid";
import { CardItem } from "@/components/Pages/TrendCard";
import { getCategory } from "@/lib/services";
import { notFound } from "next/navigation";

export default function AreaPage({ params }: { params: { area: string } }) {
  const cat = getCategory(params.area);
  if (!cat) return notFound();
  const items: CardItem[] = cat.items.map((s) => ({
    id: `${cat.key}-${s.slug}`,
    title: s.title,
    description: s.description,
    tone: s.tone,
    href: `/services/${cat.key}/${s.slug}`,
  }));
  return <SectionGrid title={cat.title} items={items} />;
}