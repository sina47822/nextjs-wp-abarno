// --- file: lib/services.ts ---
import { Tone } from "@/lib/tone";

export type CategoryKey = "accounting" | "tax" | "financial";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  tone: Tone;
}

export interface Category {
  key: CategoryKey;
  title: string;
  tone: Tone;
  items: ServiceItem[];
}

export const serviceCatalog: Record<CategoryKey, Category> = {
  accounting: {
    key: "accounting",
    title: "خدمات حسابداری",
    tone: "blue",
    items: [
      { slug: "financial", title: "حسابداری مالی", description: "ثبت و گزارش‌گری استاندارد.", tone: "blue" },
      { slug: "management", title: "حسابداری مدیریتی", description: "تحلیل و گزارش برای مدیران.", tone: "indigo" },
      { slug: "services", title: "حسابداری خدماتی", description: "ویژه کسب‌وکارهای خدماتی.", tone: "cyan" },
      { slug: "corporate", title: "حسابداری شرکت‌ها", description: "انطباق و تلفیق شرکتی.", tone: "violet" },
      { slug: "manufacturing", title: "حسابداری تولیدی", description: "بهای تمام‌شده و انبار.", tone: "orange" },
      { slug: "startup-valuation", title: "ارزش‌گذاری استارت‌آپ‌ها", description: "برای جذب سرمایه.", tone: "fuchsia" },
      { slug: "auditing", title: "حسابرسی", description: "اطمینان از شفافیت.", tone: "slate" },
      { slug: "bookkeeping", title: "دفترداری", description: "ثبت مستمر و دقیق.", tone: "green" },
      { slug: "payroll", title: "حقوق و دستمزد", description: "پرداخت دقیق و به‌موقع.", tone: "amber" },
      { slug: "financial-reporting", title: "گزارش‌گیری مالی", description: "داشبورد و گزارش‌ها.", tone: "teal" },
    ],
  },
  tax: {
    key: "tax",
    title: "خدمات مالیاتی",
    tone: "rose",
    items: [
      { slug: "tax-returns", title: "اظهارنامه مالیاتی", description: "تهیه و ارسال اظهارنامه.", tone: "rose" },
      { slug: "consulting", title: "مشاوره مالیاتی", description: "پاسخ دقیق و راهکار.", tone: "teal" },
      { slug: "planning", title: "برنامه‌ریزی مالیاتی", description: "طراحی ساختار بهینه.", tone: "indigo" },
      { slug: "dispute-resolution", title: "حل اختلافات مالیاتی", description: "پیگیری پرونده‌ها.", tone: "violet" },
      { slug: "services", title: "مالیات خدماتی", description: "الزامات حوزه خدمات.", tone: "cyan" },
      { slug: "corporate", title: "مالیات شرکت‌ها", description: "مطابقت شرکتی.", tone: "blue" },
      { slug: "manufacturing", title: "مالیات تولیدی", description: "پیچیدگی‌های تولید.", tone: "orange" },
      { slug: "estate-gift", title: "مالیات بر ارث و هدیه", description: "برنامه‌ریزی انتقال.", tone: "lime" },
      { slug: "representation", title: "نمایندگی در مقابل سازمان‌ها", description: "لوایح و جلسات.", tone: "slate" },
    ],
  },
  financial: {
    key: "financial",
    title: "مدیریت مالی",
    tone: "sage",
    items: [
      { slug: "planning", title: "برنامه‌ریزی مالی", description: "نقشه راه مالی.", tone: "sage" },
      { slug: "budgeting", title: "بودجه‌بندی", description: "کنترل هزینه و انحرافات.", tone: "lime" },
      { slug: "analysis", title: "تحلیل مالی", description: "نسبت‌ها و سناریو.", tone: "indigo" },
      { slug: "cash-flow", title: "مدیریت جریان نقدی", description: "پیش‌بینی و بهینه‌سازی.", tone: "cyan" },
      { slug: "risk-management", title: "مدیریت ریسک", description: "چارچوب‌ها و کنترل‌ها.", tone: "orange" },
      { slug: "investment", title: "سرمایه‌گذاری", description: "استراتژی رشد سرمایه.", tone: "violet" },
      { slug: "retirement", title: "برنامه‌ریزی بازنشستگی", description: "آینده‌نگری درآمدی.", tone: "rose" },
      { slug: "business-valuation", title: "ارزش‌گذاری کسب‌وکار", description: "DCF و مقایسه‌ای.", tone: "fuchsia" },
      { slug: "virtual-cfo", title: "مشاوره CFO مجازی", description: "مدیریت مالی سطح C.", tone: "teal" },
      { slug: "estate-planning", title: "برنامه‌ریزی ارث", description: "ساختار انتقال دارایی.", tone: "slate" },
    ],
  },
};

export const allCategories = (Object.keys(serviceCatalog) as CategoryKey[]).map((k) => serviceCatalog[k]);

export function getCategory(key: string) {
  return serviceCatalog[key as CategoryKey];
}

export function getItem(category: string, slug: string) {
  const cat = getCategory(category);
  if (!cat) return undefined;
  return cat.items.find((i) => i.slug === slug);
}