
// --- file: lib/menu.ts ---
export interface MenuItem {
label: string;
link?: string;
image?: string;
submenu?: { label: string; link: string }[];
}

export const menuItems: MenuItem[] = [
  { label: "خانه", link: "/", image: "/images/landscape/landscape1.jpg" },
  {
    label: "درباره ما",
    link: "/about",
    image: "/images/landscape/landscape6.jpg",
    submenu: [
      { label: "تاریخچه", link: "/about/history" },
      { label: "تیم ما", link: "/about/team" },
      { label: "چشم‌انداز", link: "/about/vision" },
    ],
  },
  {
    label: "خدمات حسابداری",
    image: "/images/landscape/landscape1.jpg",
    link: "/services/accounting",
    submenu: [
      { label: "حسابداری مالی", link: "/services/accounting/financial" },
      { label: "حسابداری مدیریتی", link: "/services/accounting/management" },
      { label: "حسابداری خدماتی", link: "/services/accounting/services" },
      { label: "حسابداری شرکت‌ها", link: "/services/accounting/corporate" },
      { label: "حسابداری تولیدی", link: "/services/accounting/manufacturing" },
      { label: "ارزش‌گذاری استارت‌آپ‌ها", link: "/services/accounting/startup-valuation" },
      { label: "حسابرسی", link: "/services/accounting/auditing" },
      { label: "دفترداری", link: "/services/accounting/bookkeeping" },
      { label: "خدمات حقوق و دستمزد", link: "/services/accounting/payroll" },
      { label: "گزارش‌گیری مالی", link: "/services/accounting/financial-reporting" },
    ],
  },
  {
    label: "خدمات مالیاتی",
    link: "/services/tax",
    image: "/images/landscape/landscape4.jpg",
    submenu: [
      { label: "تهیه اظهارنامه مالیاتی", link: "/services/tax/tax-returns" },
      { label: "مشاوره مالیاتی", link: "/services/tax/consulting" },
      { label: "برنامه‌ریزی مالیاتی", link: "/services/tax/planning" },
      { label: "حل اختلافات مالیاتی", link: "/services/tax/dispute-resolution" },
      { label: "مالیات خدماتی", link: "/services/tax/services" },
      { label: "مالیات شرکت‌ها", link: "/services/tax/corporate" },
      { label: "مالیات تولیدی", link: "/services/tax/manufacturing" },
      { label: "مالیات بر ارث و هدیه", link: "/services/tax/estate-gift" },
      { label: "نمایندگی در مقابل سازمان‌های مالیاتی", link: "/services/tax/representation" },
    ],
  },
  {
    label: "مدیریت مالی",
    link: "/services/financial",
    image: "/images/landscape/landscape2.jpg",
    submenu: [
      { label: "برنامه‌ریزی مالی", link: "/services/financial/planning" },
      { label: "بودجه‌بندی", link: "/services/financial/budgeting" },
      { label: "تحلیل مالی", link: "/services/financial/analysis" },
      { label: "مدیریت جریان نقدی", link: "/services/financial/cash-flow" },
      { label: "مدیریت ریسک", link: "/services/financial/risk-management" },
      { label: "سرمایه‌گذاری", link: "/services/financial/investment" },
      { label: "برنامه‌ریزی بازنشستگی", link: "/services/financial/retirement" },
      { label: "ارزش‌گذاری کسب‌وکار", link: "/services/financial/business-valuation" },
      { label: "مشاوره CFO مجازی", link: "/services/financial/virtual-cfo" },
      { label: "برنامه‌ریزی ارث", link: "/services/financial/estate-planning" },
    ],
  },
  {
    label: "تجارب",
    image: "/images/landscape/landscape5.jpg",
    submenu: [
      { label: "پروژه‌های موفق", link: "/experiences/projects" },
      { label: "نمونه‌کارها", link: "/experiences/portfolio" },
    ],
  },
  { label: "ارتباط با ما", link: "/contact", image: "/images/landscape/landscape3.jpg" },
];