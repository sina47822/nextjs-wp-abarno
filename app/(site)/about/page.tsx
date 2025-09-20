import SectionGrid from "@/components/Pages/SectionGrid";
import { CardItem } from "@/components/Pages/TrendCard";


export default function AboutUsPage() {
    const items: CardItem[] = [
        { id: "a1", title: "تاریخچه", description: "از شروع تا امروز؛ مسیر رشد ما.", tone: "sand", href: "/about/history" },
        { id: "a2", title: "تیم ما", description: "با متخصصان ما آشنا شوید.", tone: "violet", href: "/about/team" },
        { id: "a3", title: "چشم‌انداز", description: "چشم‌انداز و ارزش‌های سازمانی ما.", tone: "teal", href: "/about/vision" },
    ];
    return <SectionGrid title="درباره ما" items={items} />;
}