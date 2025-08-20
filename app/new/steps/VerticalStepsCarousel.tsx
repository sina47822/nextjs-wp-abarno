'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaArrowAltCircleUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaRegArrowAltCircleDown } from 'react-icons/fa'

// داده نمونه مراحل
const steps = [
  {
    "step": 1,
    "title": "تماس اولیه و مشاوره رایگان",
    "description": "در این مرحله، با مشتری تماس گرفته می‌شود تا نیازهای اولیه شنیده شود و یک مشاوره رایگان برای درک وضعیت حسابداری ارائه گردد. این کمک می‌کند تا سوالات درستی پرسیده شود و نیازهای پنهان کشف شود.",
    "icon": "☎️"
  },
  {
    "step": 2,
    "title": "جلسه ارزیابی",
    "description": "ارزیابی دقیق وضعیت حسابداری فعلی مشتری، شامل بررسی اسناد، شناسایی مشکلات (مانند حساب‌های بهم‌ریخته یا عدم وجود گزارش سرمایه در گردش)، و بحث در مورد نیازهای خاص مانند جداسازی دریافتنی‌ها و پرداختنی‌ها.",
    "icon": "📝"
  },
  {
    "step": 3,
    "title": "عقد قرارداد",
    "description": "بر اساس ارزیابی، پیشنهاد خدمات سفارشی ارائه شده و قرارداد رسمی عقد می‌شود، با مشخص کردن scope کار، زمان‌بندی، و هزینه‌ها.",
    "icon": "🤝"
  },
  {
    "step": 4,
    "title": "جمع‌آوری و تحلیل داده‌ها",
    "description": "جمع‌آوری تمام اسناد مالی و داده‌های لازم از مشتری، سپس تحلیل آنها برای شناسایی جریان نقدی، سرمایه در گردش، و نقاط ضعف.",
    "icon": "🔍"
  },
  {
    "step": 5,
    "title": "سیستم‌سازی",
    "description": "طراحی و سفارشی‌سازی سیستم حسابداری بر اساس نیازهای مشتری، شامل ایجاد ساختار منظم، ابزارهای گزارش‌گیری (مانند گزارش سرمایه در گردش)، و ادغام با فرآیندهای کسب‌وکار.",
    "icon": "📚"
  },
  {
    "step": 6,
    "title": "اجرا یا اصلاح سیستم",
    "description": "پیاده‌سازی سیستم جدید یا اصلاح سیستم موجود، تست عملکرد، و اطمینان از اینکه همه چیز به درستی کار می‌کند، مانند شفاف‌سازی جریان پول و طرف حساب‌ها.",
    "icon": "🚀"
  },
  {
    "step": 7,
    "title": "آموزش و پشتیبانی",
    "description": "آموزش تیم مشتری برای استفاده از سیستم جدید، ارائه راهنمایی‌های لازم، و تصمیم‌گیری در مورد خروج از پروژه یا عقد قرارداد جدید برای پشتیبانی مداوم.",
    "icon": "👩‍🏫"
  },
  {
    "step": 8,
    "title": "نظارت و ارزیابی نهایی",
    "description": "پس از اجرا، نظارت بر عملکرد سیستم برای چند ماه، تهیه گزارش‌های نهایی، و ارزیابی رضایت مشتری برای بهبود خدمات آینده.",
    "icon": "📊"
  }
]

const VerticalStepsCarousel = () => {
  return (
    <div className="w-full max-w-md md:max-w-6xl mx-auto relative h-[800px] md:h-full">
      {/* دکمه‌های ناوبری */}
      {/* موبایل (عمودی) */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-0 -translate-x-10 -translate-y-15 z-10 bg-gray-800 rounded-full w-6 h-10 flex items-center justify-center text-white cursor-pointer lg:hidden">
        <FaArrowUp />
      </div>
      <div className="swiper-button-next-custom absolute bottom-1/2 left-0 -translate-x-10 translate-y-15 z-10 bg-gray-800 rounded-full w-6 h-10 flex items-center justify-center text-white cursor-pointer lg:hidden">
        <FaArrowDown />
      </div>

      {/* دسکتاپ (افقی) */}

      <div className="swiper-button-next-custom absolute top-1/2 -left-16 hidden lg:flex z-10 bg-gray-800 rounded-full w-10 h-10 items-center justify-center text-white cursor-pointer">
          <FaArrowLeft />
      </div>
      <div className="swiper-button-prev-custom absolute top-1/2 -right-16 hidden lg:flex z-10 bg-gray-800 rounded-full w-10 h-10 items-center justify-center text-white cursor-pointer">
        <FaArrowRight />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        simulateTouch={true}
        draggable={true}
        mousewheel={true}
        modules={[Navigation, Mousewheel]}
        className="h-full py-12 cursor-pointer"
        breakpoints={{
          // موبایل
          0: {
            direction: 'vertical',
          },
          // دسکتاپ
          1024: {
            direction: 'horizontal',
          },
        }}
      >
        {steps.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3 h-[200px] md:h-[250px] justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 text-2xl rounded-lg p-3">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">مرحله {item.step}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 text-justify">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default VerticalStepsCarousel