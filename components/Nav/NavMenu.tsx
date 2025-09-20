"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  FaHistory,
  FaUsers,
  FaEye,
  FaFileInvoiceDollar,
  FaSitemap,
  FaHandsHelping,
  FaBuilding,
  FaIndustry,
  FaRocket,
  FaClipboardCheck,
  FaBook,
  FaMoneyBillWave,
  FaChartBar,
  FaFileSignature,
  FaCommentsDollar,
  FaCalendarCheck,
  FaGavel,
  FaGift,
  FaUserShield,
  FaWallet,
  FaChartLine,
  FaExchangeAlt,
  FaShieldAlt,
  FaCoins,
  FaUserClock,
  FaBalanceScale,
  FaUserTie,
  FaHandHoldingUsd,
  FaTrophy,
  FaBriefcase,
} from "react-icons/fa";

// === Types ===

type SubMenuItem = { label: string; link: string };

type MenuItem = {
  label: string;
  link?: string;
  image?: string; // تصویر برای هر منوی اصلی
  submenu?: SubMenuItem[];
};

// === Menu Config ===
const menuItems: MenuItem[] = [
  { label: "خانه", link: "/", image: "/images/landscape/landscape1.jpg" },
  {
    label: "درباره ما",
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

// === Icon Mapper (فقط برای آیتم‌های زیرمنو) ===
const getIconForLabel = (label: string): IconType => {
  const map: Record<string, IconType> = {
    // درباره ما
    "تاریخچه": FaHistory,
    "تیم ما": FaUsers,
    "چشم‌انداز": FaEye,

    // خدمات حسابداری
    "حسابداری مالی": FaFileInvoiceDollar,
    "حسابداری مدیریتی": FaSitemap,
    "حسابداری خدماتی": FaHandsHelping,
    "حسابداری شرکت‌ها": FaBuilding,
    "حسابداری تولیدی": FaIndustry,
    "ارزش‌گذاری استارت‌آپ‌ها": FaRocket,
    "حسابرسی": FaClipboardCheck,
    "دفترداری": FaBook,
    "خدمات حقوق و دستمزد": FaMoneyBillWave,
    "گزارش‌گیری مالی": FaChartBar,

    // خدمات مالیاتی
    "تهیه اظهارنامه مالیاتی": FaFileSignature,
    "مشاوره مالیاتی": FaCommentsDollar,
    "برنامه‌ریزی مالیاتی": FaCalendarCheck,
    "حل اختلافات مالیاتی": FaGavel,
    "مالیات خدماتی": FaHandsHelping,
    "مالیات شرکت‌ها": FaBuilding,
    "مالیات تولیدی": FaIndustry,
    "مالیات بر ارث و هدیه": FaGift,
    "نمایندگی در مقابل سازمان‌های مالیاتی": FaUserShield,

    // مدیریت مالی
    "برنامه‌ریزی مالی": FaCalendarCheck,
    "بودجه‌بندی": FaWallet,
    "تحلیل مالی": FaChartLine,
    "مدیریت جریان نقدی": FaExchangeAlt,
    "مدیریت ریسک": FaShieldAlt,
    "سرمایه‌گذاری": FaCoins,
    "برنامه‌ریزی بازنشستگی": FaUserClock,
    "ارزش‌گذاری کسب‌وکار": FaBalanceScale,
    "مشاوره CFO مجازی": FaUserTie,
    "برنامه‌ریزی ارث": FaHandHoldingUsd,

    // تجارب
    "پروژه‌های موفق": FaTrophy,
    "نمونه‌کارها": FaBriefcase,
  };
  return map[label] || FaChartBar; // آیکون پیش‌فرض
};

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [desktopHoverMenu, setDesktopHoverMenu] = useState<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && menuOpen) {
        setMenuOpen(false);
        setActiveSubMenu(null);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Handle mouse leave with delay for desktop menu
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopHoverMenu(null);
    }, 200); // 200ms delay
  };

  // Cancel timeout if mouse enters the submenu
  const handleMouseEnterSubmenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div dir="rtl" className="font-dana">
      <nav className="relative flex mx-auto justify-between items-center py-6 px-5 rounded-4xl bg-white">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 items-center">
          <Button variant="destructive" className="p-5 text-md">شروع همکاری</Button>
          <ul className="flex gap-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => {
                  if (item.submenu && item.submenu.length > 0) {
                    setDesktopHoverMenu(index);
                  }
                }}
              >
                <div className="flex items-center gap-1 text-gray-700 hover:text-[#FFBD01] transition-colors">
                  <a href={item.link || "#"}>{item.label}</a>
                  {item.submenu && item.submenu.length > 0 && (
                    <FaAngleDown className="text-gray-500 text-sm" />
                  )}
                </div>

                {/* Desktop Mega Menu */}
                {desktopHoverMenu === index && item.submenu && item.submenu.length > 0 && (
                  <div
                    className="absolute right-0 left-0 top-full w-[100vw] bg-white shadow-lg p-8 z-20 border-t-2 border-red-500"
                    onMouseEnter={handleMouseEnterSubmenu}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* لینک‌های زیرمنو با آیکون */}
                      <div className={`${item.image ? "lg:col-span-9" : "lg:col-span-12"} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6`}>
                        {item.submenu.map((sub, subIndex) => {
                          const Icon = getIconForLabel(sub.label);
                          return (
                            <a
                              key={subIndex}
                              href={sub.link}
                              className="flex items-start gap-3 text-gray-700 hover:text-[#FFBD01] transition-colors"
                            >
                              <span className="mt-1"><Icon className="w-5 h-5" /></span>
                              <span className="text-gray-700">{sub.label}</span>
                            </a>
                          );
                        })}
                      </div>
                      {/* ستون تصویر منوی اصلی */}
                      {item.image && (
                        <aside className="lg:col-span-3">
                          <img
                            src={item.image}
                            alt={`${item.label} image`}
                            className="w-full h-[200px] lg:h-[260px] object-cover rounded-xl"
                          />
                        </aside>
                      )}

                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setActiveSubMenu(null);
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-16 right-0 w-full bg-white shadow-lg p-5 flex flex-col gap-4 md:hidden z-20"
          >
            {menuItems.map((item, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer py-2 text-gray-700 hover:text-[#FFBD01]"
                  onClick={() => {
                    if (item.submenu && item.submenu.length > 0) {
                      setActiveSubMenu(activeSubMenu === index ? null : index);
                    } else {
                      window.location.href = item.link || "#";
                    }
                  }}
                >
                  <a href={item.link || "#"}>{item.label}</a>
                  {item.submenu && item.submenu.length > 0 && (
                    <FaAngleDown
                      className={`transition-transform ${activeSubMenu === index ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {/* تصویر منوی اصلی در موبایل (اختیاری) */}
                {activeSubMenu === index && item.image && (
                  <img
                    src={item.image}
                    alt={`${item.label} image`}
                    className="w-full h-[140px] object-cover rounded-lg mb-3"
                  />
                )}

                {/* Mobile Submenu (فقط آیکون + متن) */}
                {activeSubMenu === index && item.submenu && item.submenu.length > 0 && (
                  <ul className="pr-4 flex flex-col gap-2 border-r border-gray-200">
                    {item.submenu.map((sub, subIndex) => {
                      const Icon = getIconForLabel(sub.label);
                      return (
                        <li key={subIndex} className="flex items-center gap-3">
                          <span className="mt-1"><Icon className="w-4 h-4" /></span>
                          <a href={sub.link} className="text-gray-700 hover:text-[#FFBD01]">
                            {sub.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
            <Button variant="destructive" className="p-3 text-md w-full">شروع همکاری</Button>
          </div>
        )}
        <div className="text-gray-700 font-bold">
          <img src="/logo/gandom-01-02.svg" alt="abarnoakhtar-logo" width={"150px"} />
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
