// --- file: app/contact/page.tsx (ارتباط با ما) ---
import SectionGrid from "@/components/Pages/SectionGrid";
import { CardItem } from "@/components/Pages/TrendCard";


export default function ContactPage() {
    const items: CardItem[] = [
        { id: "c1", title: "فرم تماس", description: "از طریق فرم پیام بفرستید.", tone: "amber", href: "/contact#form" },
        { id: "c2", title: "اطلاعات تماس", description: "آدرس، ایمیل و تلفن.", tone: "slate", href: "/contact#info" },
        { id: "c3", title: "شبکه‌های اجتماعی", description: "ما را در شبکه‌ها دنبال کنید.", tone: "lime", href: "/contact#social" },
    ];
    
    return <SectionGrid title="ارتباط با ما" items={items} />;
}