import { Button } from '@/components/ui/button'
import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaArrowCircleDown, FaArrowDown, FaBars, FaTimes } from 'react-icons/fa'

type MenuItem = {
  label: string;
  link?: string;
  submenu?: { label: string; link: string }[];
};

const menuItems: MenuItem[] = [
  { label: 'خانه', link: '/' },
  {
    label: 'درباره ما',
    submenu: [
      { label: 'تاریخچه', link: '/about/history' },
      { label: 'تیم ما', link: '/about/team' },
      { label: 'چشم‌انداز', link: '/about/vision' },
    ],
  },
  {
    label: 'خدمات حسابداری',
    submenu: [
      { label: 'حسابداری مالی', link: '/services/accounting/financial' },
      { label: 'حسابداری مدیریتی', link: '/services/accounting/management' },
      { label: 'حسابداری خدماتی', link: '/services/accounting/services' },
      { label: 'حسابداری شرکت‌ها', link: '/services/accounting/corporate' },
      { label: 'حسابداری تولیدی', link: '/services/accounting/manufacturing' },
      { label: 'ارزش‌گذاری استارت‌آپ‌ها', link: '/services/accounting/startup-valuation' },
      { label: 'حسابرسی', link: '/services/accounting/auditing' },
      { label: 'دفترداری', link: '/services/accounting/bookkeeping' },
      { label: 'خدمات حقوق و دستمزد', link: '/services/accounting/payroll' },
      { label: 'گزارش‌گیری مالی', link: '/services/accounting/financial-reporting' },
    ],
  },
  {
    label: 'خدمات مالیاتی',
    submenu: [
      { label: 'تهیه اظهارنامه مالیاتی', link: '/services/tax/tax-returns' },
      { label: 'مشاوره مالیاتی', link: '/services/tax/consulting' },
      { label: 'برنامه‌ریزی مالیاتی', link: '/services/tax/planning' },
      { label: 'حل اختلافات مالیاتی', link: '/services/tax/dispute-resolution' },
      { label: 'مالیات خدماتی', link: '/services/tax/services' },
      { label: 'مالیات شرکت‌ها', link: '/services/tax/corporate' },
      { label: 'مالیات تولیدی', link: '/services/tax/manufacturing' },
      { label: 'مالیات بر ارث و هدیه', link: '/services/tax/estate-gift' },
      { label: 'نمایندگی در مقابل سازمان‌های مالیاتی', link: '/services/tax/representation' },
    ],
  },
  {
    label: 'مدیریت مالی',
    submenu: [
      { label: 'برنامه‌ریزی مالی', link: '/services/financial/planning' },
      { label: 'بودجه‌بندی', link: '/services/financial/budgeting' },
      { label: 'تحلیل مالی', link: '/services/financial/analysis' },
      { label: 'مدیریت جریان نقدی', link: '/services/financial/cash-flow' },
      { label: 'مدیریت ریسک', link: '/services/financial/risk-management' },
      { label: 'سرمایه‌گذاری', link: '/services/financial/investment' },
      { label: 'برنامه‌ریزی بازنشستگی', link: '/services/financial/retirement' },
      { label: 'ارزش‌گذاری کسب‌وکار', link: '/services/financial/business-valuation' },
      { label: 'مشاوره CFO مجازی', link: '/services/financial/virtual-cfo' },
      { label: 'برنامه‌ریزی ارث', link: '/services/financial/estate-planning' },
    ],
  },
  {
    label: 'تجارب',
    submenu: [
      { label: 'پروژه‌های موفق', link: '/experiences/projects' },
      { label: 'نمونه‌کارها', link: '/experiences/portfolio' },
    ],
  },
  { label: 'ارتباط با ما', link: '/contact' },
];

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
    const [desktopHoverMenu, setDesktopHoverMenu] = useState<number | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  return (
    <div>
        <nav className='relative font-dana flex mx-auto justify-between md:justify-between aligns-center py-6 px-5 rounded-4xl'>
            {/* desktop menu */}
            <div className='hidden md:flex gap-5 items-center'>
                <Button variant='destructive' className='p-5 text-md' >شروع همکاری</Button>
                <ul className='flex gap-6'>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="relative group cursor-pointer"
                            onMouseEnter={() =>
                                item.submenu && item.submenu.length > 0
                                ? setDesktopHoverMenu(index)
                                : setDesktopHoverMenu(null)
                            }
                            onMouseLeave={() => setDesktopHoverMenu(null)}
                        >
                        <div className="flex items-center gap-1">
                            {item.label}
                            {item.submenu && item.submenu.length > 0 && (
                            <FaAngleDown className="text-gray-500 text-sm" />
                            )}
                        </div>

                        {/* Desktop Full-width Submenu */}
                        {desktopHoverMenu === index &&
                            item.submenu &&
                            item.submenu.length > 0 && (
                            <div className="absolute right-0 top-full w-screen bg-white shadow-lg p-6 flex gap-10 z-20">
                            {item.submenu.map((sub, subIndex) => (
                                <a
                                key={subIndex}
                                href={sub.link}
                                className="text-gray-700 hover:text-red-500 transition-colors"
                                >
                                {sub.label}
                                </a>
                            ))}
                            </div>
                        )}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Mobile Hamburger */}
            <button 
                className="md:hidden text-2xl"
                onClick={() => {
                    console.log("Toggling menuOpen:", !menuOpen);
                    setMenuOpen(!menuOpen)
                    setActiveSubMenu(null)
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
                            className="flex justify-between items-center cursor-pointer py-2"
                            onClick={() => {
                            if (item.submenu && item.submenu.length > 0) {
                                setActiveSubMenu(activeSubMenu === index ? null : index)
                            } else {
                                // Navigate directly if no submenu
                                window.location.href = item.link || "#"
                            }
                            }}
                        >
                        {item.label}
                        {item.submenu && item.submenu.length > 0 && (
                            <FaAngleDown
                                className={`transition-transform ${
                                    activeSubMenu === index ? "rotate-180" : ""
                                }`}
                            />
                        )}
                    </div>
                    {/* Mobile Submenu */}
                    {activeSubMenu === index && item.submenu && item.submenu.length > 0 && (
                        <ul className="pl-4 flex flex-col gap-2 border-l border-gray-200">
                            {item.submenu.map((sub, subIndex) => (
                            <li key={subIndex}>
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
            <div>LOGO</div>
        </nav>
    </div>
  )
}

export default NavMenu

