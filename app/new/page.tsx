'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import styles from './styles/main.module.css'
import LogoCarousel from '@/components/Carousel/logoCarousel'
import HeaderText from '@/components/Text/header'
import Featureaccordion from '@/components/Feature/Accordion/Featureaccordion'
import { FaArrowLeft, FaArrowRight, FaBars, FaBook, FaChartBar, FaChartLine, FaEarlybirds, FaGalacticSenate, FaHandPaper, FaHandshake, FaHeart, FaLightbulb, FaPuzzlePiece } from 'react-icons/fa'
import BrandStoryCard from './stories/StoriyCard'
import StoriesCarousel from './stories/StoriesCarousel'
import VerticalStepsCarousel from './steps/VerticalStepsCarousel'
import HeroCarousel from './hero/HeroCarousel'
import NavMenu from './Nav/NavMenu'
const newFrontPage = () => {
    const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
        <div className='flex justify-center items-center'>
            <div
                className='overflow-hidden w-[100%]'
            >
                <NavMenu />
                <HeroCarousel />
                {/* <section className='bg-gray-100 pb-20 pt-5'>
                    <LogoCarousel />
                </section> */}
                <section className='bg-gray-100 py-12'>
                    <div className='flex justify-center items-center pb-[40px]'>
                        <div className='w-[80%] flex flex-col justify-center items-start'>
                            <HeaderText content='مزایای ما' className='mb-2' />
                            <h2 className='py-4 text-3xl md:text-4xl font-yekan font-bold '>چرا باید ما را انتخاب کنید؟</h2>
                            <ul className='py-4'>
                                <li className='flex gap-2 cursor-pointer hover:text-gray-500'>
                                    <FaHandPaper />
                                    <p
                                     onClick={() => {
                                        document.getElementById("why-us-grid-1")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    >شنیدن نیازهای شما</p>
                                </li>
                                <li className='flex gap-2 cursor-pointer hover:text-gray-500'>
                                    <FaChartBar />
                                    <p
                                        onClick={() => {
                                            document.getElementById("why-us-grid-2")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                         راه‌حل‌های سفارشی</p>
                                </li>
                                <li className='flex gap-2 cursor-pointer hover:text-gray-500'>
                                    <FaHandshake />
                                    <p
                                        onClick={() => {
                                            document.getElementById("why-us-grid-3")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        شریک استراتژیک شما</p>
                                </li>
                                <li className='flex gap-2 cursor-pointer hover:text-gray-500'>
                                    <FaGalacticSenate />
                                    <p
                                        onClick={() => {
                                            document.getElementById("why-us-grid-4")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        شفافیت و آموزش</p>
                                </li>
                            </ul>
                            <Button variant={'destructive'} className='text-md py-6 px-4 cursor-pointer'>
                                ببینید چگونه می‌توانیم به شما کمک کنیم
                            </Button>
                        </div>
                    </div>
                    {/* grid 1 */}
                    <div id='why-us-grid-1' className='flex justify-center items-center py-10'>
                        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                            <div className='flex justify-center items-center'>
                                <img src="tip/role-based-access.svg" className='w-full' alt="compliance" />
                            </div>
                            <div className='flex flex-col pt-10 items-center '>
                                <p>
                                    راه‌حل‌های سفارشی
                                </p>
                                <h2 className='text-3xl md:text-4xl text-center py-4 font-yekan font-bold'>
                                   اول گوش می‌دهیم، بعد عمل می‌کنیم
                                </h2>
                                <p className='text-justify'>
                                    "ما با پرسیدن سوالات هوشمندانه (مثل 'آیا می‌دانید پول‌تان کجا گیر کرده؟')، نیازهای واقعی‌تان را کشف می‌کنیم – حتی اگر خودتان از آنها بی‌خبر باشید."
                                    مثال: "یک مشتری نمی‌دانست سرمایه در گردش چیست – ما با چند سوال ساده، گزارش دقیق آن را تهیه کردیم."
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* grid 2 */}
                    <div id='why-us-grid-2' className='flex justify-center items-center py-10'>
                        <div className='w-[80%] grid md:grid-flow-col grid-row-2 grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                            <div className='flex md:col-start-2 justify-center items-center'>
                                <img src="tip/validate-suppliers.svg" className='w-full' alt="compliance" />
                            </div>                            
                            <div className='flex flex-col pt-10 items-center'>
                                <p>
                                    راه‌حل‌های سفارشی
                                </p>
                                <h2 className='text-3xl md:text-4xl text-center py-4 font-yekan font-bold'>
                                    خدماتی که فقط برای شما طراحی شده
                                </h2>
                                <p className='text-justify'>
                                    "برخی شرکت‌ها نیاز به جداسازی دریافتنی‌ها و پرداختنی‌ها دارند، برخی فقط مرتب‌سازی پایه‌ای می‌خواهند. ما دقیقاً آنچه نیاز دارید ارائه می‌دهیم – بدون اضافه‌کاری."
                                    مثال: "برای یک شرکت کوچک، دریافتنی‌ها و پرداختنی‌ها را جدا کردیم و جریان نقدی‌شان را شفاف کردیم."
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* grid 3 */}
                    <div id='why-us-grid-3' className='flex justify-center items-center py-10'>
                        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='flex justify-center items-center'>
                                <img src="tip/ongoing-screening.svg" className='w-full' alt="compliance" />
                            </div>                            
                            <div className='flex flex-col pt-10 items-center'>
                                <p>
                                    شریک استراتژیک شما
                                </p>
                                <h2 className='text-3xl md:text-4xl text-center py-4 font-yekan font-bold'>
                                    ما فقط حسابدار نیستیم
                                </h2>
                                <p className='text-justify'>
                                    "ما شریک شما هستیم که با گزارش‌های کاربردی (مثل سرمایه در گردش) و مشاوره‌های هدفمند، به رشد کسب‌وکارتان کمک می‌کنیم."
                                    مثال: "یکی از مشتریان با گزارش ما، سرمایه‌گذاری‌اش را ۲۰٪ بهینه کرد."
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* grid 4 */}
                    <div id='why-us-grid-4' className='flex justify-center items-center py-10'>
                        <div className='w-[80%] grid md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='flex md:col-start-2 justify-center items-center'>
                                <img src="tip/electronic-payments.svg" className='w-full' alt="compliance" />
                            </div>                            
                            <div className='flex flex-col pt-10 items-center'>
                                <p>
                                    شفافیت و آموزش
                                </p>
                                <h2 className='text-3xl md:text-4xl text-center py-4 font-yekan font-bold' >
                                   شفافیت در هر قدم
                                </h2>
                                <p className='text-justify'>
                                    "ما نه تنها حساب‌هایتان را مرتب می‌کنیم، بلکه به تیم‌تان آموزش می‌دهیم تا خودتان مدیریت کنید."
                                    مثال: "به یک شرکت کوچک یاد دادیم چگونه جریان نقدی را رصد کند."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100">
                    <div className="flex items-center pb-[40px] w-full">
                        <div className="flex flex-col w-[80%] mx-auto">
                        <HeaderText content="بخش خدمات ما" className="mb-2" />
                        <h2 className="py-4 text-3xl md:text-4xl font-bold">هوشمندانه‌تر کار کنید</h2>
                            <ul>
                                <li
                                    id="service-sort"
                                    className="flex gap-2 cursor-pointer hover:text-gray-500"
                                    onClick={() => {
                                    setActiveIndex(0);
                                    document.getElementById("accordion-sort")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <FaPuzzlePiece />
                                    <p>مرتب‌سازی حسابداری نامنظم</p>
                                </li>

                                <li
                                    id="service-report"
                                    className="flex gap-2 cursor-pointer hover:text-gray-500"
                                    onClick={() => {
                                    setActiveIndex(1);
                                    document.getElementById("accordion-report")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <FaChartLine />
                                    <p>گزارش‌گیری پیشرفته (سرمایه در گردش)</p>
                                </li>

                                <li
                                    id="service-consult"
                                    className="flex gap-2 cursor-pointer hover:text-gray-500"
                                    onClick={() => {
                                    setActiveIndex(2);
                                    document.getElementById("accordion-consult")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <FaLightbulb />
                                    <p>مشاوره سفارشی برای تازه‌کارها</p>
                                </li>

                                <li
                                    id="service-training"
                                    className="flex gap-2 cursor-pointer hover:text-gray-500"
                                    onClick={() => {
                                    setActiveIndex(3);
                                    document.getElementById("accordion-training")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <FaBook />
                                    <p>آموزش و پشتیبانی مداوم</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className='bg-gray-100 flex items-center justify-center py-2'>
                    <div className={styles.gridBackground2}>
                        <div className='flex items-center justify-center md:justify-between mx-auto py-10 items-center w-[90%] grid grid-cols-1 md:grid-cols-2 gap-5 '>
                            <div className='z-2 w-[100%] md:w-[80%] flex flex-col justify-self-center md:justify-self-auto'>
                                <Featureaccordion
                                    id="accordion-sort"
                                    title={'مرتب‌سازی حسابداری نامنظم'} 
                                    content={' با پرسیدن سوالات کلیدی، ساختار منظمی برای کسب‌وکارتان می‌سازیم. حساب‌های بهم‌ریخته را مرتب می‌کنیم."تمایز: "برخلاف شرکت‌های دیگر که فقط گزارش می‌دهند، ما ابتدا نیازهای شما را می‌شنویم.'} 
                                    button={'بیشتر درباره مرتب سازی ما بدانید'}
                                    index={0}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                />
                                <Featureaccordion
                                    id="accordion-report"
                                    index={1}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    title={'گزارش‌گیری پیشرفته (سرمایه در گردش)'} 
                                    content={'"گزارش‌های دقیق مثل سرمایه در گردش، دریافتنی‌ها و پرداختنی‌ها، و جریان نقدی که به شما نشان می‌دهد پول‌تان کجا می‌چرخد."تمایز: "ما گزارش‌هایی می‌دهیم که واقعاً به تصمیم‌گیری کمک می‌کند، نه فقط کاغذبازی."'} 
                                    button={'درباره گزارشهای ما بیشتر بدانید'}  
                                />
                                <Featureaccordion
                                    id="accordion-consult"
                                    index={2}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    title={'مشاوره سفارشی برای تازه‌کارها'} 
                                    content={'"نمی‌دانید از کجا شروع کنید؟ ما نیازهای‌تان را شنیده و راه‌حل‌های ساده ارائه می‌دهیم – بدون پیچیدگی."تمایز: "ما برای کسب‌وکارهای کوچک طراحی شده‌ایم که نیاز به راهنمایی دارند، نه اصطلاحات پیچیده."'} 
                                    button={'اطلاعات بیشتر درباره خدمات مشاوره ای ما'}  
                                />
                                <Featureaccordion
                                    id="accordion-training"
                                    index={3}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    title={'آموزش و پشتیبانی مداوم'} 
                                    content={'پس از مرتب‌سازی، به تیم‌تان آموزش می‌دهیم تا خودشان حسابداری را مدیریت کنند."تمایز: "ما شما را وابسته نگه نمی‌داریم – خودکفا می‌شوید'} 
                                    button={'اطلاعات بیشتر'}  
                                />
                            </div>
                            <div className={styles.gridBackground}>
                                <img src={'/tip/ai-platform-module-1.svg'} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-gray-100 flex items-center justify-center py-2'>
                    <div className='w-[90%] bg-black rounded-[4rem]'>
                        <div className='flex items-center justify-center md:justify-between mx-auto py-10 items-center w-[90%] '>
                            <div className='flex flex-col justify-center pb-[40px] w-full'>
                                <div className='flex flex-col w-[50%]'>
                                    <HeaderText content='داستان کارهای ما' className='mb-2 text-white' />
                                    <h2 className='py-2 text-3xl md:text-[3rem] font-yekan font-bold text-white w-[100%] pt-10 pb-10'>
                                            فقط به حرف ما اکتفا نکنید،
                                            <br/>
                                            ببینید مشتریان‌مان چه می‌گویند.
                                    </h2>
                                    <p className='text-lg text-justify text-white pb-10'>
                                        ما در سالهای متمادی فعالیتی خود مشکلات بزرگی را پشت سر گذاشته ایم و با چالش های بسیار روبرو بوده ایم اما هربار پشت کسب و کارهایی که با آنها کار کردیم ایستادیم و در سخت ترین شرایط جا نزدیم در اینجا می توانید با داستان هایی مربوط به چالش هایی که داشتیم و خاطرات ما بیشتر آشنا شوید و ما را بهتر بشناسید
                                    </p>
                                    <Button className="group relative inline-flex items-center bg-black border border-white text-white px-6 py-6 rounded-md transition-colors duration-300 w-full justify-start">
                                          <span className="text-right">
                                            همه داستان های ما
                                          </span>
                                          <FaArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-2" />
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-8 items-center justify-start mt-10 w-[90%]">
                                    <img src="images/logos/Intuit_QuickBooks_logo-grey.svg" alt="NetSuite" className="h-22 object-contain grayscale hover:grayscale-0 transition duration-300" />
                                    <img src="images/logos/logo_dynamics.svg" alt="Sage" className="h-22 object-contain grayscale hover:grayscale-0 transition duration-300" />
                                    <img src="images/logos/logo_oracle-netsuite.svg" alt="SAP" className="h-22 object-contain grayscale hover:grayscale-0 transition duration-300" />
                                    <img src="images/logos/logo_sage.svg" alt="Xero" className="h-22 object-contain grayscale hover:grayscale-0 transition duration-300" />
                                    <img src="images/logos/xero-grey.svg" alt="QuickBooks" className="h-22 object-contain grayscale hover:grayscale-0 transition duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <StoriesCarousel />
                
                <section className='bg-gray-100 flex items-center justify-center py-2'>
                    <div className='w-[90%] bg-gray-200 rounded-[4rem]'>
                        <div className='flex items-center justify-center md:justify-between mx-auto py-10 items-center w-[90%] '>
                            <div className='flex flex-col justify-center pb-[40px] w-full grid grid-cols-1 md:grid-cols-2'>
                                <div className='flex flex-col my-auto'>
                                    <HeaderText content='نحوه شروع همکاری' className='mb-2' />
                                    <h2 className='py-2 text-3xl md:text-[3rem] font-yekan font-bold pt-10 pb-10'>راه‌اندازی حسابداری در عرض چند هفته، نه چند ماه</h2>
                                    <p className='text-lg text-justify pb-10'>
                                         با پشتیبانی مشتریان به‌صورت مشارکتی و فرآیند آموزش اختصاصی، در کوتاه‌ترین زمان به بهره‌برداری می‌رسید.
                                    </p>
                                    <Button variant={'destructive'} className="group py-6 cursor-pointer">
                                          <span className="text-right"> درخواست جلسه ارزیابی رایگان</span>
                                          <FaArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-2" />
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-8 items-center justify-center mt-10 w-[90%]">
                                    <VerticalStepsCarousel />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default newFrontPage
