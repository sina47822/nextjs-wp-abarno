import { Button } from '@/components/ui/button'
import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa'

type MenuItem = {
  label: string;
  link?: string;
  submenu?: { label: string; link: string; image?: string }[];
};

const menuItems: MenuItem[] = [
  { label: 'خانه', link: '/' },
  {
    label: 'درباره ما',
    submenu: [
      { label: 'تاریخچه', link: '/about/history', image: 'https://via.placeholder.com/64' },
      { label: 'تیم ما', link: '/about/team', image: 'https://via.placeholder.com/64' },
      { label: 'چشم‌انداز', link: '/about/vision', image: 'https://via.placeholder.com/64' },
    ],
  },
  {
    label: 'خدمات حسابداری',
    submenu: [
      { label: 'حسابداری مالی', link: '/services/accounting/financial', image: 'https://via.placeholder.com/64' },
      { label: 'حسابداری مدیریتی', link: '/services/accounting/management', image: 'https://via.placeholder.com/64' },
      { label: 'حسابداری خدماتی', link: '/services/accounting/services', image: 'https://via.placeholder.com/64' },
      { label: 'حسابداری شرکت‌ها', link: '/services/accounting/corporate', image: 'https://via.placeholder.com/64' },
      { label: 'حسابداری تولیدی', link: '/services/accounting/manufacturing', image: 'https://via.placeholder.com/64' },
      { label: 'ارزش‌گذاری استارت‌آپ‌ها', link: '/services/accounting/startup-valuation', image: 'https://via.placeholder.com/64' },
      { label: 'حسابرسی', link: '/services/accounting/auditing', image: 'https://via.placeholder.com/64' },
      { label: 'دفترداری', link: '/services/accounting/bookkeeping', image: 'https://via.placeholder.com/64' },
      { label: 'خدمات حقوق و دستمزد', link: '/services/accounting/payroll', image: 'https://via.placeholder.com/64' },
      { label: 'گزارش‌گیری مالی', link: '/services/accounting/financial-reporting', image: 'https://via.placeholder.com/64' },
    ],
  },
  {
    label: 'خدمات مالیاتی',
    submenu: [
      { label: 'تهیه اظهارنامه مالیاتی', link: '/services/tax/tax-returns', image: 'https://via.placeholder.com/64' },
      { label: 'مشاوره مالیاتی', link: '/services/tax/consulting', image: 'https://via.placeholder.com/64' },
      { label: 'برنامه‌ریزی مالیاتی', link: '/services/tax/planning', image: 'https://via.placeholder.com/64' },
      { label: 'حل اختلافات مالیاتی', link: '/services/tax/dispute-resolution', image: 'https://via.placeholder.com/64' },
      { label: 'مالیات خدماتی', link: '/services/tax/services', image: 'https://via.placeholder.com/64' },
      { label: 'مالیات شرکت‌ها', link: '/services/tax/corporate', image: 'https://via.placeholder.com/64' },
      { label: 'مالیات تولیدی', link: '/services/tax/manufacturing', image: 'https://via.placeholder.com/64' },
      { label: 'مالیات بر ارث و هدیه', link: '/services/tax/estate-gift', image: 'https://via.placeholder.com/64' },
      { label: 'نمایندگی در مقابل سازمان‌های مالیاتی', link: '/services/tax/representation', image: 'https://via.placeholder.com/64' },
    ],
  },
  {
    label: 'مدیریت مالی',
    submenu: [
      { label: 'برنامه‌ریزی مالی', link: '/services/financial/planning', image: 'https://via.placeholder.com/64' },
      { label: 'بودجه‌بندی', link: '/services/financial/budgeting', image: 'https://via.placeholder.com/64' },
      { label: 'تحلیل مالی', link: '/services/financial/analysis', image: 'https://via.placeholder.com/64' },
      { label: 'مدیریت جریان نقدی', link: '/services/financial/cash-flow', image: 'https://via.placeholder.com/64' },
      { label: 'مدیریت ریسک', link: '/services/financial/risk-management', image: 'https://via.placeholder.com/64' },
      { label: 'سرمایه‌گذاری', link: '/services/financial/investment', image: 'https://via.placeholder.com/64' },
      { label: 'برنامه‌ریزی بازنشستگی', link: '/services/financial/retirement', image: 'https://via.placeholder.com/64' },
      { label: 'ارزش‌گذاری کسب‌وکار', link: '/services/financial/business-valuation', image: 'https://via.placeholder.com/64' },
      { label: 'مشاوره CFO مجازی', link: '/services/financial/virtual-cfo', image: 'https://via.placeholder.com/64' },
      { label: 'برنامه‌ریزی ارث', link: '/services/financial/estate-planning', image: 'https://via.placeholder.com/64' },
    ],
  },
  {
    label: 'تجارب',
    submenu: [
      { label: 'پروژه‌های موفق', link: '/experiences/projects', image: 'https://via.placeholder.com/64' },
      { label: 'نمونه‌کارها', link: '/experiences/portfolio', image: 'https://via.placeholder.com/64' },
    ],
  },
  { label: 'ارتباط با ما', link: '/contact' },
];

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
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
                <div className="flex items-center gap-1 text-gray-700 hover:text-red-500 transition-colors">
                  <a href={item.link || '#'}>{item.label}</a>
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
                    <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
                      {/* Decorative Corner Images */}
                      <img
                        src="https://via.placeholder.com/100"
                        alt="Decorative Top Right"
                        className="absolute top-0 right-0 w-16 h-16 object-cover rounded-md"
                      />
                      <img
                        src="https://via.placeholder.com/100"
                        alt="Decorative Bottom Left"
                        className="absolute bottom-0 left-0 w-16 h-16 object-cover rounded-md"
                      />
                      {item.submenu.map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href={sub.link}
                          className="flex items-start gap-3 text-gray-700 hover:text-red-500 transition-colors"
                        >
                          {sub.image && (
                            <img
                              src={sub.image}
                              alt={sub.label}
                              className="w-12 h-12 object-cover rounded-md border"
                            />
                          )}
                          <span className="text-gray-700">{sub.label}</span>
                        </a>
                      ))}
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
                  className="flex justify-between items-center cursor-pointer py-2 text-gray-700 hover:text-red-500"
                  onClick={() => {
                    if (item.submenu && item.submenu.length > 0) {
                      setActiveSubMenu(activeSubMenu === index ? null : index);
                    } else {
                      window.location.href = item.link || '#';
                    }
                  }}
                >
                  <a href={item.link || '#'}>{item.label}</a>
                  {item.submenu && item.submenu.length > 0 && (
                    <FaAngleDown
                      className={`transition-transform ${activeSubMenu === index ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>
                {/* Mobile Submenu */}
                {activeSubMenu === index && item.submenu && item.submenu.length > 0 && (
                  <ul className="pr-4 flex flex-col gap-2 border-r border-gray-200">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex} className="flex items-center gap-3">
                        {sub.image && (
                          <img
                            src={sub.image}
                            alt={sub.label}
                            className="w-8 h-8 object-cover rounded-md border"
                          />
                        )}
                        <a href={sub.link} className="text-gray-700 hover:text-red-500">
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Button variant="destructive" className="p-3 text-md w-full">شروع همکاری</Button>
          </div>
        )}
        <div className="text-gray-700 font-bold">
          <img src="/logo/gandom-01-02.svg" alt="abarnoakhtar-logo"  width={'150px'}/>
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;