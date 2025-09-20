// --- file: app/services/page.tsx (صفحه سرویس‌ها) ---
import SectionGrid from "@/components/Pages/SectionGrid";
import { CardItem } from "@/components/Pages/TrendCard";
import { allCategories } from "@/lib/services";

export default function ServicesPage() {
  const items: CardItem[] = allCategories.map((c) => ({
    id: c.key,
    title: c.title,
    description: `مشاهده ${c.items.length} خدمت در این بخش`,
    tone: c.tone,
    href: `/services/${c.key}`,
  }));
  return <SectionGrid title="سرویس‌ها" items={items} />;
}