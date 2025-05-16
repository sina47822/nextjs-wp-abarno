// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaBars, FaBlog, FaCalendarAlt, FaChartLine, FaCheck, FaClock, FaConciergeBell, FaEnvelope, FaFileInvoiceDollar, FaGlobeAmericas, FaGoogle, FaHome, FaInfoCircle, FaLightbulb, FaMapMarkerAlt, FaMicrosoft, FaPhoneAlt, FaPlus, FaRocket, FaShieldAlt, FaSignInAlt, FaStar, FaTimes, FaUserPlus, FaUsers } from "react-icons/fa";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [blogArticles, setBlogArticles] = useState([
    {
      id: 1,
      image:
        "https://readdy.ai/api/search-image?query=business%20professionals%20analyzing%20financial%20charts%20and%20graphs%20on%20tablet%2C%20close-up%20of%20hands%20with%20financial%20data%20visualization%2C%20professional%20setting%20with%20spreadsheets%20and%20analytics%2C%20clean%20modern%20workspace%2C%20business%20analytics%20context&width=375&height=150&seq=blog3&orientation=landscape",
      category: "Finance",
      title: "Understanding Financial Statements: A Guide for Small Businesses",
      description:
        "Learn how to interpret balance sheets, income statements, and cash flow statements to make better business decisions.",
      date: "May 10, 2025",
      readTime: "8 min",
    },
    {
      id: 2,
      image:
        "https://readdy.ai/api/search-image?query=tax%20compliance%20documents%20with%20calculator%20and%20laptop%2C%20professional%20desk%20setup%20with%20tax%20forms%20and%20financial%20paperwork%2C%20organized%20workspace%20with%20pen%20and%20glasses%2C%20business%20taxation%20context%2C%20clean%20modern%20setting&width=375&height=150&seq=blog4&orientation=landscape",
      category: "Tax",
      title: "Tax Compliance in 2025: What's Changed and How to Adapt",
      description:
        "Stay updated on the latest tax regulations and learn strategies to ensure your business remains compliant.",
      date: "May 5, 2025",
      readTime: "6 min",
    },
    {
      id: 3,
      image:
        "https://readdy.ai/api/search-image?query=digital%20accounting%20automation%20concept%20with%20computer%20screen%20showing%20invoice%20processing%20software%2C%20modern%20office%20setting%20with%20financial%20documents%20and%20technology%2C%20professional%20workspace%20with%20accounting%20software%20interface%20visible&width=375&height=150&seq=blog5&orientation=landscape",
      category: "Technology",
      title: "How AI is Transforming the Accounting Industry",
      description:
        "Discover how artificial intelligence and machine learning are revolutionizing accounting processes and what it means for your business.",
      date: "Apr 28, 2025",
      readTime: "7 min",
    },
    {
      id: 4,
      image:
        "https://readdy.ai/api/search-image?query=global%20payment%20concept%20with%20world%20map%20and%20financial%20transaction%20symbols%2C%20international%20business%20finance%20visualization%2C%20professional%20graphic%20showing%20money%20transfer%20across%20borders%2C%20clean%20modern%20design%20with%20currency%20symbols&width=375&height=150&seq=blog6&orientation=landscape",
      category: "Finance",
      title: "Navigating International Payments: Challenges and Solutions",
      description:
        "Learn about the complexities of cross-border payments and discover strategies to optimize your international payment processes.",
      date: "Apr 22, 2025",
      readTime: "9 min",
    },
  ]);

  const additionalArticles = [
    {
      id: 5,
      image:
        "https://readdy.ai/api/search-image?query=cybersecurity%20in%20finance%20concept%20with%20digital%20lock%20and%20financial%20data%2C%20modern%20security%20visualization%2C%20professional%20tech%20environment%2C%20clean%20corporate%20setting%20with%20blue%20tones&width=375&height=150&seq=blog7&orientation=landscape",
      category: "Security",
      title: "Cybersecurity Best Practices for Financial Data",
      description:
        "Essential security measures to protect your financial data and maintain client trust in the digital age.",
      date: "Apr 18, 2025",
      readTime: "7 min",
    },
    {
      id: 6,
      image:
        "https://readdy.ai/api/search-image?query=sustainable%20finance%20concept%20with%20green%20energy%20and%20financial%20graphs%2C%20environmental%20business%20visualization%2C%20professional%20eco-friendly%20setting%2C%20clean%20modern%20design%20with%20nature%20elements&width=375&height=150&seq=blog8&orientation=landscape",
      category: "Sustainability",
      title: "Green Finance: The Future of Sustainable Business",
      description:
        "How businesses are incorporating environmental considerations into their financial decisions and reporting.",
      date: "Apr 15, 2025",
      readTime: "8 min",
    },
    {
      id: 7,
      image:
        "https://readdy.ai/api/search-image?query=blockchain%20finance%20technology%20concept%20with%20connected%20blocks%20and%20financial%20data%2C%20modern%20crypto%20visualization%2C%20professional%20tech%20environment%2C%20clean%20digital%20design&width=375&height=150&seq=blog9&orientation=landscape",
      category: "Technology",
      title: "Blockchain in Financial Services",
      description:
        "Understanding the impact of blockchain technology on traditional financial services and future opportunities.",
      date: "Apr 12, 2025",
      readTime: "10 min",
    },
  ];

  const loadMoreArticles = () => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const nextArticles = additionalArticles.slice(
        (currentPage - 1) * 3,
        currentPage * 3,
      );

      if (nextArticles.length > 0) {
        setBlogArticles((prev) => [...prev, ...nextArticles]);
        setCurrentPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }

      setIsLoading(false);
    }, 1500);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-[375px] md:w-[700px] lg:w-[1000px] xl:w-[1300px] mx-auto relative">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 w-full">
        <div className="flex items-center justify-between px-4 py-3 max-w-[375px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1300px] mx-auto">
          <div className="flex items-center">
            <img
              src="/images/logo.jpg"
              alt="AbarnoAkhtar Logo"
              className="h-8"
            />
            <span className="ml-2 font-semibold text-gray-800 text-lg">
              AbarnoAkhtar
            </span>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 cursor-pointer"
              aria-label="Menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 w-full max-w-[375px] mx-auto">
          <div className="p-4">
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleMenu}
                className="text-gray-700 cursor-pointer"
                aria-label="Close menu"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setActiveTab("home");
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 text-left rounded-lg hover:bg-gray-100 flex items-center"
              >
                <FaHome className="ml-3 text-teal-500 w-6" />
                <span>خانه</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("invoices");
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 text-left rounded-lg hover:bg-gray-100 flex items-center"
              >
                <FaFileInvoiceDollar className="ml-3 text-teal-500 w-6" />
                <span>فاکتورها</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("services");
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 text-left rounded-lg hover:bg-gray-100 flex items-center"
              >
                <FaConciergeBell className="ml-3 text-teal-500 w-6" />
                <span>خدمات</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("dashboard");
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 text-left rounded-lg hover:bg-gray-100 flex items-center"
              >
                <FaChartLine className="ml-3 text-teal-500 w-6" />
                <span>داشبورد</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("blog");
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 text-left rounded-lg hover:bg-gray-100 flex items-center"
              >
                <FaBlog className="ml-3 text-teal-500 w-6" />
                <span>بلاگ</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("about");
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 text-left rounded-lg hover:bg-gray-100 flex items-center"
              >
                <FaInfoCircle className="ml-3 text-teal-500 w-6" />
                <span>درباره ما</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("contact");
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 text-left rounded-lg hover:bg-gray-100 flex items-center"
              >
                <FaEnvelope className="ml-3 text-teal-500 w-6" />
                <span>ارتباط با ما</span>
              </button>
              <div className="border-t border-gray-200 my-2 pt-2">
                <button
                  onClick={() => {
                    setActiveTab("login");
                    setIsMenuOpen(false);
                  }}
                  className="py-3 px-4 text-left rounded-lg hover:bg-gray-100 flex items-center"
                >
                  <FaSignInAlt className="ml-3 text-teal-500 w-6" />
                  <span>ورود</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab("signup");
                    setIsMenuOpen(false);
                  }}
                  className="py-3 px-4 text-left rounded-lg hover:bg-gray-100 flex items-center"
                >
                  <FaUserPlus className="ml-3 text-teal-500 w-6" />
                  <span>عضویت</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow pt-16 pb-16">
        {activeTab === "home" && (
          <div className="px-4 py-6">
            {/* Hero Section */}
            <div className="mb-8 md:flex md:gap-5">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 mb-4 shadow-md">
                <h2 className="text-white text-2xl font-bold mb-3">
                خودکارسازی حسابداری شما
                </h2>
                <p className="text-white text-sm mb-4">
                راهکار جامع ما فرآیندهای وقت‌گیر حسابداری را ساده و روان می‌کند تا تیم شما بتواند بر کارهای مهم‌تر تمرکز کند.
                </p>
                <Button className="bg-white text-teal-600 hover:bg-gray-100 !rounded-button">
                  <FaRocket className="mr-2" />
                  آشنایی با فرایند خودکارسازی
                </Button>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl mb-4 p-6 shadow-md">
                <h2 className="text-white text-2xl font-bold mb-3">
                  مدیریت حسابها
                </h2>
                <p className="text-white text-sm mb-4">
                پرداخت‌ها و واریزیهای خود را به‌راحتی ساده سازی کنید تا رضایت دریافت کنندگان را حفظ کرده، تطابق مالیاتی را تقویت کرده و از تقلب جلوتر باشید.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 !rounded-button">
                  <FaGlobeAmericas className="mr-2" />
                  آشنایی با فرایند مدیریت حساب
                </Button>
              </div>
            </div>

            {/* Services Preview */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                خدمات ما
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-center mb-3">
                    <img
                      src="/images/invoice-management.jpg"
                      alt="Invoice Management"
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h4 className="text-center text-sm font-medium text-gray-800 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    مدیریت فاکتورها
                  </h4>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-center mb-3">
                    <img
                      src="/images/Payment-Processing.jpg"
                      alt="Payment Processing"
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h4 className="text-center text-sm font-medium text-gray-800 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    پردازش داده های حساب ها                 
                  </h4>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-center mb-3">
                    <img
                      src="/images/Tax-Compliance.jpg"
                      alt="Tax Compliance"
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h4 className="text-center text-sm font-medium text-gray-800 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    امور مالیاتی
                  </h4>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-center mb-3">
                    <img
                      src="/images/Financial-Reporting.jpg"
                      alt="Financial Reporting"
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h4 className="text-center text-sm font-medium text-gray-800 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    گزارشات مالی
                  </h4>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                مورد اعتماد کسب و کار شما
              </h3>
              <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 ml-3">
                    <AvatarImage src="/images/avatar/avatar1.jpg" />
                    <AvatarFallback>EJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-gray-800">Gandom Berno</h4>
                    <p className="text-xs text-gray-500">
                      CEO
                      {/* TechGrowth Inc. */}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  "ابرنواختر تحول بزرگی در روند حسابداری ما ایجاد کرده است. زمان پردازش فاکتورها را ۷۵٪ کاهش داده‌ایم و خطاهای دستی را به طور کامل از بین برده‌ایم"
                </p>
                <div className="mt-3 text-yellow-400 flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
              </div>
            </div>

            {/* Blog Preview */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  آخرین مقالات
                </h3>
                <button
                  onClick={() => setActiveTab("blog")}
                  className="flex text-teal-500 text-sm font-medium cursor-pointer"
                >
                  مشاهده همه <FaArrowLeft className="mr-1" />
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <img
                  src="/images/landscape/landscape1.jpg"
                  alt="Finance Team Meeting"
                  className="w-full h-48 md:h-150 object-cover object-top"
                />
                <div className="p-4">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 mb-2">
                    مالی
                  </Badge>
                  <h4 className="font-medium text-gray-800 mb-2">
                  ۵ راه برای ساده‌سازی فرآیند حساب‌های پرداختنی
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                  بیاموزید چگونه کسب‌وکارهای مدرن با تحول در گردش‌کار حساب‌های پرداختنی (AP)، در زمان صرفه‌جویی کرده و هزینه‌ها را کاهش می‌دهند.
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>May 12, 2025</span>
                    <span className="flex">
                      <FaClock className="ml-1" /> زمان مطالعه ۵ دقیقه
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "invoices" && (
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              مدیریت فاکتورها
            </h2>

            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">
                  ایجاد فاکتور جدید
                </h3>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                  <FaPlus className="mr-2" />
                  فاکتور جدید
                </Button>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">
                با استفاده از قالب ساده و کاربرپسند ما، به‌سرعت برای مشتریان خود فاکتور ایجاد کنید. در عرض چند ثانیه آیتم‌ها، مالیات و تخفیف‌ها را اضافه کنید.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-3">
              فاکتورهای اخیر
              </h3>

              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-800">
                      شماره فاکتور:#INV-2025-0421
                    </span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      پرداخت شده
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">
                      خرید از تنخواه
                    </span>
                    <span className="font-medium">
                      ۰۰۰'۰۰۰'۲۱۰
                      ریال 
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>
                    تاریخ صدور: ۱۰ مه ۲۰۲۵
                    </span>
                    <span>
                    تاریخ سررسید: ۲۴ مه ۲۰۲۵
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-800">
                      شماره فاکتور:#INV-2025-0421
                    </span>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                      در انتظار پرداخت
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">
                      شرکت راهکارهای افق
                    </span>
                    <span className="font-medium">
                      ۰۰۰'۰۰۰'۴۵۰
                      ریال 
                      </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>
                      تاریخ صدور: ۸ مه ۲۰۲۵
                    </span>
                    <span>
                    تاریخ سررسید: ۲۰ مه ۲۰۲۵
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-800">
                      شماره فاکتور:#INV-2025-0421
                    </span>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                    سررسید گذشته
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">
                    گروه خرده‌فروشی پیناکل
                    </span>
                    <span className="font-medium">
                    ۰۰۰'۰۰۰'۳۴۰
                    ریال 
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>
                      تاریخ صدور: ۲ مه ۲۰۲۵
                    </span>
                    <span>
                    تاریخ سررسید: ۹ مه ۲۰۲۵
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-3">
                آنالیز فاکتورها
              </h3>
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">پرداخت‌نشده</p>
                    <p className="text-sm text-gray-800">
                      ۰۰۰'۰۰۰'۰۵۰'۳ ریال 
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1"> سررسید گذشته</p>
                    <p className="text-sm text-red-600">
                    ۰۰۰'۰۰۰'۱۵۰ ریال 
                    </p>
                  </div>
                </div>
                <img
                  src="/images/invoicestatus.jpg"
                  alt="Invoice Status Chart"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              خدمات ما و قیمت گذاری
            </h2>

            <Tabs defaultValue="monthly" className="mb-6">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="monthly">ماهانه</TabsTrigger>
                <TabsTrigger value="annual">سالانه (تخفیف ۲۰٪)</TabsTrigger>
              </TabsList>

              <TabsContent value="monthly" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <CardTitle>پایه</CardTitle>
                    <CardDescription>
                      برای بیزینس های کوچک و فری لنسرها
                    </CardDescription>
                    <div className="mt-2">
                    <span className="text-gray-500 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-800">
                        ۱۰
                      </span>
                      <span className="text-gray-500 text-md">میلیون تومان</span>

                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          بیش از ۲۰ فاکتور ماهانه
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">گزارشات پایه</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">پشتیبانی ایمیلی</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">تک کاربره</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      شروع همکاری
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="py-0 pb-6">
                  <CardHeader className="py-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
                    <Badge className="bg-white text-teal-600 hover:bg-gray-100">
                      پرطرفدار
                    </Badge>
                    <CardTitle className="mt-2">حرفه ای</CardTitle>
                    <CardDescription className="text-teal-100">
                      برای بیزینس های در حال رشد
                    </CardDescription>
                    <div className="mt-2">
                      <span className="text-gray-50 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-50">
                        25
                      </span>
                      <span className="text-gray-50 text-md"> میلیون تومان</span>

                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">ایجاد فاکتور بدون محدودیت</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          تحلیل مالی و گزارش گیری پیشرفته
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          پشتیبانی آنلاین و ایمیل در اولویت
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">۵ کاربر</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">یاداوری پرداخت هزینه‌ها</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">برند سازی</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      شروع به همکاری
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <CardTitle>سازمانی</CardTitle>
                    <CardDescription>مناسب برای شرکت ها و سازمانهای بزرگ</CardDescription>
                    <div className="mt-2">
                      <span className="text-gray-500 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-600">
                        ۴۵
                      </span>
                      <span className="text-gray-500 text-md"> میلیون تومان</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          همه امکانات اکانت حرفه ای
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">بدون محدودیت تعداد کاربر</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          مدیر حساب اختصاصی
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">API دسترسی به</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          امکانات پیشرفته امنیتی
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      مذاکره با تیم ما
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="annual" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <CardTitle>پایه</CardTitle>
                    <CardDescription>
                      برای بیزینس های کوچک و فری لنسرها
                    </CardDescription>
                    <div className="mt-2">
                    <span className="text-gray-500 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-800">
                        ۸
                      </span>
                      <span className="text-gray-500 text-md"> میلیون تومان</span>

                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          بیش از ۲۰ فاکتور ماهانه
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">گزارشات پایه</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">پشتیبانی ایمیلی</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">تک کاربره</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      شروع همکاری
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="py-0 pb-6">
                  <CardHeader className="py-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
                    <Badge className="bg-white text-teal-600 hover:bg-gray-100">
                      پرطرفدار
                    </Badge>
                    <CardTitle className="mt-2">حرفه ای</CardTitle>
                    <CardDescription className="text-teal-100">
                      برای بیزینس های در حال رشد
                    </CardDescription>
                    <div className="mt-2">
                      <span className="text-gray-50 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-50">
                        ۲۰
                      </span>
                      <span className="text-gray-50 text-md"> میلیون تومان</span>

                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">ایجاد فاکتور بدون محدودیت</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          تحلیل مالی و گزارش گیری پیشرفته
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          پشتیبانی آنلاین و ایمیل در اولویت
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">۵ کاربر</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">یاداوری پرداخت هزینه‌ها</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">برند سازی</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      شروع به همکاری
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <CardTitle>سازمانی</CardTitle>
                    <CardDescription>مناسب برای شرکت ها و سازمانهای بزرگ</CardDescription>
                    <div className="mt-2">
                      <span className="text-gray-500 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-600">
                        ۳۶
                      </span>
                      <span className="text-gray-500 text-md"> میلیون تومان</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          همه امکانات اکانت حرفه ای
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">بدون محدودیت تعداد کاربر</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          مدیر حساب اختصاصی
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">API دسترسی به</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          امکانات پیشرفته امنیتی
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      مذاکره با تیم ما
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="bg-gray-50 rounded-lg p-5 mb-6">
              <h3 className="font-medium text-gray-800 mb-3">
              نیاز به یک راه‌حل سفارشی دارید؟
              </h3>
              <p className="text-sm text-gray-600 mb-4">
              ما راه‌حل‌های متناسب با نیازهای خاص کسب‌وکار شما ارائه می‌دهیم. برای بررسی نیازهای خود با تیم فروش ما تماس بگیرید.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                <FaPhoneAlt className="mr-2" />
                تماس با تیم فروش
              </Button>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-3">
              سؤالات متداول
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                    آیا می‌توانم پلن خود را ارتقا یا کاهش دهم؟
                  </h4>
                  <p className="text-sm text-gray-600">
                  بله، شما می‌توانید در هر زمانی پلن خود را ارتقا یا کاهش دهید. تغییرات در چرخه صورتحساب بعدی شما اعمال خواهند شد.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                  آیا نسخه آزمایشی رایگان وجود دارد؟
                  </h4>
                  <p className="text-sm text-gray-600">
                    بله، ما برای همه پلن‌ها نسخه آزمایشی ۱۴ روزه رایگان ارائه می‌دهیم. برای شروع نیازی به کارت بانکی نیست.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                    چه روش‌های پرداختی را قبول می‌کنید؟  
                  </h4>
                  <p className="text-sm text-gray-600">
                    ما از تمامی کارت‌های اعتباری اصلی و انتقال بانکی برای پلن‌های سالانه پشتیبانی می‌کنیم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "dashboard" && (
          <div className="px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">داشبورد</h2>
              <div className="flex text-sm text-gray-500">
                <FaCalendarAlt className="ml-1" /> May 14, 2025
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">درآمد کل</p>
                <p className="text-sm text-gray-800">۱۲‌٬۰۰۰٬۰۰۰٬۰۰۰ ریال</p>
                <div className="flex text-xs text-green-500 mt-1">
                  <FaArrowUp className="ml-1" /> ۱۲.۵٪ رشد نسبت به ماه گذشته
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">پرداخت نشده</p>
                <p className="text-sm text-gray-800">۵٬۰۰۰٬۰۰۰ ریال</p>
                <div className="flex text-xs text-red-500 mt-1">
                  <FaArrowUp className="ml-1" /> ۴.۵٪ کاهش نسبت به ماه گذشته
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
              <h3 className="font-medium text-gray-800 mb-3">
                نمای کلی
              </h3>
              <img
                src="/images/landscape/landscape2.jpg"
                alt="Revenue Chart"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
              <h3 className="font-medium text-gray-800 mb-3">وضعیت فاکتورها</h3>
              <img
                src="/images/landscape/landscape3.jpg"
                alt="Invoice Status Chart"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-3">
                تراکنش های اخیر
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">
                      خرید از تنخواه
                      </p>
                      <p className="text-xs text-gray-500">
                      شماره فاکتور:#INV-2025-0421
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">۰۰۰'۰۰۰'۲۱۰ ریال</p>
                      <p className="text-xs text-green-500">پرداخت شده</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">
                      شرکت راهکارهای افق
                      </p>
                      <p className="text-xs text-gray-500">
                      شماره فاکتور:#INV-2025-0421
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">۰۰۰'۰۰۰'۴۵۰ ریال</p>
                      <p className="text-xs text-yellow-500">در انتظار پرداخت</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">
                      گروه خرده‌فروشی پیناکل
                      </p>
                      <p className="text-xs text-gray-500">
                      شماره فاکتور:#INV-2025-0421
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">۰۰۰'۰۰۰'۳۴۰ ریال</p>
                      <p className="text-xs text-red-500">سررسید گذشته</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "blog" && (
          <div className="px-4 py-6 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">بلاگ</h2>

            <div className="mb-6">
              <div className="relative mb-6">
                <img
                  src="/images/landscape/landscape4.jpg"
                  alt="Finance Team Meeting"
                  className="w-full h-48 md:h-150 object-cover object-top rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 mb-2">
                    ویژه
                  </Badge>
                  <h3 className="text-white font-medium">
                    ۵ روش برای ساده‌سازی فرآیند حساب‌های پرداختنی
                  </h3>
                </div>
              </div>

              <div className="flex gap-2 mb-6 overflow-x-auto py-1">
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 whitespace-nowrap md:text-lg">
                  همه
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 whitespace-nowrap md:text-lg">
                  مالی
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 whitespace-nowrap md:text-lg">
                  حسابداری
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 whitespace-nowrap md:text-lg">
                  مالیاتی
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 whitespace-nowrap md:text-lg">
                  تطابق مالیاتی
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 whitespace-nowrap md:text-lg">
                  تکنولوژی
                </Badge>
              </div>

              <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <img
                    src="/images/landscape/landscape5.jpg"
                    alt="Financial Analysis"
                    className="w-full h-36 object-cover object-top"
                  />
                  <div className="p-4">
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 mb-2">
                      مالی
                    </Badge>
                    <h4 className="font-medium text-gray-800 mb-2">
                      درک صورت‌های مالی: راهنمایی برای کسب‌وکارهای کوچک
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      یاد بگیرید چگونه ترازنامه، صورت سود و زیان و جریان وجوه نقد را تفسیر کنید تا تصمیمات بهتری در کسب‌وکار بگیرید.
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>۱۰ مه ۲۰۲۵ </span>
                      <span className="flex">
                        <FaClock className="ml-1" />۸ دقیقه مطالعه
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <img
                    src="/images/landscape/landscape5.jpg"
                    alt="Tax Compliance"
                    className="w-full h-36 object-cover object-top"
                  />
                  <div className="p-4">
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 mb-2">
                    مالیات
                    </Badge>
                    <h4 className="font-medium text-gray-800 mb-2">
                    تطابق مالیاتی در سال ۲۰۲۵: چه چیزهایی تغییر کرده و چگونه سازگار شویم
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                    از جدیدترین مقررات مالیاتی مطلع شوید و راهکارهایی بیاموزید تا کسب‌وکار شما همچنان مطابق با قوانین باقی بماند.
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>۵ مه ۲۰۲۵ </span>
                      <span className="flex">
                        <FaClock className="ml-1" />  ۶ دقیقه مطالعه
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <img
                    src="/images/landscape/landscape6.jpg"
                    alt="Accounting Automation"
                    className="w-full h-36 object-cover object-top"
                  />
                  <div className="p-4">
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 mb-2">
                      فناوری  
                    </Badge>
                    <h4 className="font-medium text-gray-800 mb-2">
                    چگونه هوش مصنوعی در حال تحول صنعت حسابداری است
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      کشف کنید که هوش مصنوعی و یادگیری ماشین چگونه فرآیندهای حسابداری را متحول کرده‌اند و این موضوع چه تأثیری بر کسب‌وکار شما دارد.
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>۲۸ آوریل ۲۰۲۵ </span>
                      <span className="flex">
                        <FaClock className="ml-1" />  ۷ دقیقه مطالعه
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <img
                    src="/images/landscape/landscape7.jpg"
                    alt="Global Payments"
                    className="w-full h-36 object-cover object-top"
                  />
                  <div className="p-4">
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 mb-2">
                      مالی
                    </Badge>
                    <h4 className="font-medium text-gray-800 mb-2">
                      هدایت پرداخت‌های بین‌المللی: چالش‌ها و راهکارها
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                    با پیچیدگی‌های پرداخت‌های فرامرزی آشنا شوید و راهکارهایی برای بهینه‌سازی فرآیند پرداخت‌های بین‌المللی خود بیابید.
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span> ۲۲ آوریل ۲۰۲۵</span>
                      <span className="flex">
                        <FaClock className="ml-1" />  ۹ دقیقه مطالعه
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
            <Button
                id="loadMoreBtn"
                className="bg-teal-500 hover:bg-teal-600 text-white !rounded-button"
                onClick={loadMoreArticles}
                disabled={isLoading || !hasMore}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    منتظر باشید...
                  </>
                ) : hasMore ? (
                  "مشاهده مقالات بیشتر"
                ) : (
                  "مقاله بیشتری وجود ندارد"
                )}
              </Button>
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">درباره ما</h2>

            <div className="bg-white rounded-lg shadow-sm p-5 mb-6 border border-gray-100">
              <h3 className="font-medium text-gray-800 mb-3">ماموریت ما</h3>
              <p className="text-gray-600 text-sm mb-4">
              در ابرنواختر ماموریت ما ساده‌سازی عملیات مالی برای کسب‌وکارهایی با هر اندازه‌ای است. ما باور داریم که مدیریت امور مالی باید بدون دردسر باشد تا شما بتوانید روی مهم‌ترین موضوع تمرکز کنید: رشد کسب‌وکارتان.
              </p>
              <img
                src="/images/landscape/landscape5.jpg"
                alt="Our Team"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-gray-600 text-sm">
              شرکت ما در سال 1398 تأسیس شد و تاکنون به بیش از ۵,۰۰۰ کسب‌وکار در ساده‌سازی فرآیندهای حسابداری کمک کرده‌ایم، به‌طوری‌که آن‌ها ساعت‌های بی‌شماری را صرفه‌جویی کرده و خطاهای مالی را تا ۹۵٪ کاهش داده‌اند.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-3">ارزش‌های ما</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-3">
                      <FaLightbulb className="text-teal-500" />
                    </div>
                    <h4 className="font-medium text-gray-800">نوآوری</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                  ما همواره مرزهای فناوری مالی را جابه‌جا می‌کنیم تا راهکارهایی نوآورانه و به‌روز ارائه دهیم.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-3">
                      <FaShieldAlt className="text-teal-500" />
                    </div>
                    <h4 className="font-medium text-gray-800">امنیت</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    امنیت اطلاعات مالی شما در اولویت ماست؛ با رمزگذاری در سطح بانکی و تدابیر حفاظتی پیشرفته از داده‌های شما محافظت می‌کنیم.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-3">
                      <FaUsers className="text-teal-500" />
                    </div>
                    <h4 className="font-medium text-gray-800">
                      مشتری‌محور
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    مشتریان، محور تمام فعالیت‌های ما هستند. ما به حرف شما گوش می‌دهیم، خود را تطبیق می‌دهیم و با بازخوردهای شما پیشرفت می‌کنیم.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-3">
                تیم رهبری
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <Avatar className="h-16 w-16 mx-auto mb-3">
                    <AvatarImage src="/images/avatar/avatar1.jpg" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <h4 className="text-center font-medium text-gray-800">
                    گندم برنو
                  </h4>
                  <p className="text-center text-xs text-gray-500">
                  مدیرعامل و هم‌بنیان‌گذار (CEO & Co-Founder)
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <Avatar className="h-16 w-16 mx-auto mb-3">
                    <AvatarImage src="/images/avatar/avatar1.jpg" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <h4 className="text-center font-medium text-gray-800">
                    سینا افشار
                  </h4>
                  <p className="text-center text-xs text-gray-500">
                  مدیر ارشد فناوری و هم‌بنیان‌گذار (CTO & Co-Founder)
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <Avatar className="h-16 w-16 mx-auto mb-3">
                    <AvatarImage src="/images/avatar/avatar1.jpg" />
                    <AvatarFallback>JW</AvatarFallback>
                  </Avatar>
                  <h4 className="text-center font-medium text-gray-800">
                    James Wilson
                  </h4>
                  <p className="text-center text-xs text-gray-500">
                  مدیر مالی (CFO)
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <Avatar className="h-16 w-16 mx-auto mb-3">
                    <AvatarImage src="/images/avatar/avatar1.jpg" />
                    <AvatarFallback>AP</AvatarFallback>
                  </Avatar>
                  <h4 className="text-center font-medium text-gray-800">
                    Amelia Patel
                  </h4>
                  <p className="text-center text-xs text-gray-500">
                  مدیر اجرایی عملیات (COO)
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <Avatar className="h-16 w-16 mx-auto mb-3">
                    <AvatarImage src="/images/avatar/avatar1.jpg" />
                    <AvatarFallback>AP</AvatarFallback>
                  </Avatar>
                  <h4 className="text-center font-medium text-gray-800">
                    هانی ادیب ازاد
                  </h4>
                  <p className="text-center text-xs text-gray-500">
                  مشاور (consaltant)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-3">
              دستاوردهای ما
              </h3>
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <p className="text-xs text-gray-500">بیش از</p>
                    <p className="text-2xl font-bold text-teal-500">۵۰۰۰</p>
                    <p className="text-xs text-gray-500">کسب‌وکار تحت پوشش</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-xs text-gray-500">پردازش بیش از</p>
                    <p className="text-2xl font-bold text-teal-500">۲ میلیارد</p>
                    <p className="text-xs text-gray-500">
                    تراکنش مالی
                    </p>
                  </div>
                  <div className="text-center flex-1">
                   <p className="text-xs text-gray-500">فعال در بیش از</p>
                    <p className="text-2xl font-bold text-teal-500">۱۰</p>
                    <p className="text-xs text-gray-500">شهر</p>
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 mb-2">
                    برنده جایزه 
                  </Badge>
                  <p className="text-sm text-gray-600">
                  نوآوری فین‌تک ۲۰۲۴ برای بهترین راهکار حسابداری
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>

            <div className="bg-white rounded-lg shadow-sm p-5 mb-6 border border-gray-100">
              <h3 className="font-medium text-gray-800 mb-4"> با ما در ارتباط باشید</h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    نام کامل
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="مثال: سینا افشار"
                    className="w-full border-gray-300 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    آدرس ایمیل
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="مثال: sinaa@gmail.com"
                    className="w-full border-gray-300 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    موضوع
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="درباره این میخواهم صحبت کنم که ..."
                    className="w-full border-gray-300 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    پیام شما
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="چطور میتوانیم کمک کنیم؟"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  ></textarea>
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                  ارسال پیام
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-3">
                    <FaEnvelope className="text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">ایمیل ما</h4>
                    <p className="text-sm text-teal-500">
                      support@abarnoakhtar.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-3">
                    <FaPhoneAlt className="text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">تماس با ما</h4>
                    <p className="text-sm text-teal-500">+۹۱۹۴۲۲۰۳۳۸</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-3">
                    <FaMapMarkerAlt className="text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">مراجعه حضوری</h4>
                    <p className="text-sm text-gray-600">
                      تهران میدان ونک نرسیده به جهان کودک
                      <br />
                      دانشگاه علامه طباطبایی
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-3">
              سؤالات متداول
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                  ساعات پشتیبانی شما چگونه است؟
                  </h4>
                  <p className="text-sm text-gray-600">
                  تیم پشتیبانی ما از شنبه تا چهارشنبه ساعت ۸ صبح تا ۵ عصر  و پنجشنبه ها از ۹ صبح تا ۲ عصر در دسترس است.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                  پاسخگویی به پیام‌ها چقدر طول می‌کشد؟
                  </h4>
                  <p className="text-sm text-gray-600">
                  ما تلاش می‌کنیم در روزهای کاری، حداکثر ظرف ۲۴ ساعت به تمام پیام‌ها پاسخ دهیم. مشتریان پلن پریمیوم از پشتیبانی اولویت‌دار با زمان پاسخ کمتر از ۴ ساعت بهره‌مند می‌شوند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "login" && (
          <div className="px-4 py-6 flex flex-col items-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  خوش آمدید
                </h2>
                <p className="text-gray-600 text-sm">
                  برای دسترسی به حساب کاربری خود وارد شوید  
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="login-email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        آدرس ایمیل
                      </label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="مثال:‌sinaa@gmail.com"
                        className="w-full border-gray-300 text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <label
                          htmlFor="login-password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          رمز عبور
                        </label>
                        <button
                          type="button"
                          className="text-xs text-teal-500 hover:text-teal-600 cursor-pointer"
                        >
                         فراموش کردید؟
                        </button>
                      </div>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="ورود رمز عبور"
                        className="w-full border-gray-300 text-sm"
                      />
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-teal-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-700"
                        >
                          مرا به خاطر بسپار
                        </label>
                      </div>
                    </div>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button mb-4">
                      ورود
                    </Button>
                    <div className="relative mb-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-white text-gray-500">
                        یا ادامه دهید با:
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        className="w-full !rounded-button"
                      >
                        <FaGoogle className="mr-2" />
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full !rounded-button"
                      >
                        <FaMicrosoft className="mr-2" />
                        Microsoft
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <p className="text-sm text-gray-600">
                  حساب کاربری ندارید؟{" "}
                    <button
                      onClick={() => setActiveTab("signup")}
                      className="text-teal-500 hover:text-teal-600 font-medium cursor-pointer"
                    >
                       ثبت‌نام کنید
                    </button>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "signup" && (
          <div className="px-4 py-6 flex flex-col items-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                ایجاد حساب کاربری
                </h2>
                <p className="text-gray-600 text-sm">
                به جمع هزاران کسب‌وکار استفاده‌کننده از ابرنواختر بپیوندید
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          نام
                        </label>
                        <Input
                          id="first-name"
                          type="text"
                          placeholder="وارد کردن نام"
                          className="w-full border-gray-300 text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          نام خانوادگی
                        </label>
                        <Input
                          id="last-name"
                          type="text"
                          placeholder="وارد کردن نام خانوادگی"
                          className="w-full border-gray-300 text-sm"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        نام شرکت
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="نام شرکت شما"
                        className="w-full border-gray-300 text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="signup-email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        id="آدرس ایمیل"
                        type="email"
                        placeholder="مثال:‌sinaa@gmail.com"
                        className="w-full border-gray-300 text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="signup-password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        رمز عبور
                      </label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="رمز عبور خود را وارد کنید"
                        className="w-full border-gray-300 text-sm"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                      حداقل ۸ کاراکتر، شامل یک حرف بزرگ، یک عدد و یک کاراکتر خاص
                      </p>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-start">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-teal-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="terms"
                          className="ml-2 block text-sm text-gray-700"
                        >
                          با{" "}
                          <a
                            href="#"
                            className="text-teal-500 hover:text-teal-600"
                          >
                            قوانین خدمات
                          </a>{" "}
                          و{" "}
                          <a
                            href="#"
                            className="text-teal-500 hover:text-teal-600"
                          >
                            سیاست حفظ حریم خصوصی
                          </a>
                          {" "}موافقم
                        </label>
                      </div>
                    </div>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button mb-4">
                    ایجاد حساب کاربری
                    </Button>
                    <div className="relative mb-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-white text-gray-500">
                        یا ثبت‌نام با:
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        className="w-full !rounded-button"
                      >
                        <FaGoogle className="mr-2" />
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full !rounded-button"
                      >
                        <FaMicrosoft className="mr-2" />
                        Microsoft
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <p className="text-sm text-gray-600">
                    قبلا حساب کاربری دارید؟{" "}
                    <Button
                      onClick={() => setActiveTab("login")}
                      className="text-teal-100 hover:text-teal-600 font-medium cursor-pointer"
                    >
                      وارد شوید
                    </Button>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 w-full">
        <div className="grid grid-cols-5 max-w-[375px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1300px] mx-auto">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center justify-center py-2 cursor-pointer ${activeTab === "home" ? "text-teal-500" : "text-gray-500"}`}
          >
            <FaHome className="text-lg md:text-2xl" />
            <span className="text-xs mt-1  md:text-lg">خانه</span>
          </button>
          <button
            onClick={() => setActiveTab("invoices")}
            className={`flex flex-col items-center justify-center py-2 cursor-pointer ${activeTab === "invoices" ? "text-teal-500" : "text-gray-500"}`}
          >
            <FaFileInvoiceDollar className="text-lg md:text-2xl" />
            <span className="text-xs mt-1 md:text-lg">فاکتورها</span>
          </button>
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center justify-center py-2 cursor-pointer ${activeTab === "dashboard" ? "text-teal-500" : "text-gray-500"}`}
          >
          <FaChartLine className="text-lg md:text-2xl" />
          <span className="text-xs mt-1 md:text-lg">داشبورد</span>
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`flex flex-col items-center justify-center py-2 cursor-pointer ${activeTab === "blog" ? "text-teal-500" : "text-gray-500"}`}
          >
            <FaBlog className="text-lg md:text-2xl" />
            <span className="text-xs mt-1 md:text-lg">بلاگ</span>
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`flex flex-col items-center justify-center py-2 cursor-pointer ${activeTab === "contact" ? "text-teal-500" : "text-gray-500"}`}
          >
            <FaEnvelope className="text-lg md:text-2xl" />
            <span className="text-xs mt-1 md:text-lg">تماس با ما</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
