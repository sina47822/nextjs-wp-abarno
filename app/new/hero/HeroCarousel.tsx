import { Button } from '@/components/ui/button'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import styles from '../styles/main.module.css'
import SvgAnimation from './SvgAnimation'

const HeroCarousel = () => {
  return (
    <div>
        <section className='bg-gray-100 flex items-center justify-center py-10'>
            <div className={styles.gridBackground}>
                <div className='flex items-center justify-center md:justify-between mx-auto py-10 items-center w-[90%] grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[500px]'>
                    <div className='z-2 w-[100%] md:w-[80%] flex flex-col justify-self-center md:justify-self-auto'>
                        <div className='text-white font-bold font-yekan text-3xl text-justify pb-8'>
                            "رشد کسب‌وکارتان از اینجا شروع می‌شود!"
                        </div>
                        <div className='text-white font-yekan text-xl text-justify'>
                            "حسابداری شنوا و همراه"
                        </div>
                        
                        <div className=' text-white font-yekan text-md text-justify'>
                            {/* ما شریک استراتژیک کسب‌وکارهای شما با تمرکز بر شنیدن شما و پرسیدن سوالات درست */}
                            {/* راهکارهای انطباق مالی ابرنواختر کنترل‌های دقیقی بر عملیات پرداخت و حساب‌های پرداختنی ارائه می‌دهد. با استفاده از این راهکارها، امنیت داده‌های مالی حساس افزایش می‌یابد، انطباق مستمر با مقررات OFAC تضمین می‌شود و نظارت مدیریتی بر فرآیندهای کلیدی پرداخت بهبود می‌یابد. */}
                        </div>
                        <div className=' text-white text-md text-justify pb-8'>
                            {/* "ما سوالات درستی می‌پرسیم تا نیازهای پنهان کسب‌وکارتان را کشف کنیم – از مرتب‌سازی حساب‌های بهم‌ریخته تا گزارش‌های سرمایه در گردش که پول‌تان را به جریان می‌اندازد." */}
                            ما با پرسیدن سوالات درست، نیازهای پنهان کسب‌وکارتان را کشف کرده و حساب‌های بهم‌ریخته را به سیستمی شفاف و جریان‌ساز تبدیل می‌کنیم.
                        </div>

                        <div className='grid'>
                            <Button variant={'destructive'} className='text-md py-6 px-4 btn-block cursor-pointer'>
                                درخواست جلسه ارزیابی رایگان
                            </Button> 
                            {/* <li className='text-white text-sm text-justify pt-4'>"آیا نیاز به گزارش سرمایه در گردش دارید؟"</li>
                            <li className='text-white text-sm text-justify'>"اولین قدم: نیازهای شما را می‌شنویم."</li>
                            <li className='text-white text-sm text-justify'>"آیا می‌دانید پول‌تان کجا گیر کرده؟"</li>
                            <li className='text-white text-sm text-justify'>"آیا درامد خوبی دارید اما برای پرداخت بدهی های خود به مشکل برخوردید؟"</li>
                            <li className='text-white text-sm text-justify pb-4'>"آیا مدت زیادی است که برای خرید دستگاه گران قیمت نمی توانید تصمیم بگیرید؟"</li> */}

                        </div>
                    </div>
                    <div className=''>
                        <SvgAnimation />
                    </div>
                </div>
            </div>
        </section>

        <p>
        </p>
        {/* <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 bg-gray-300 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10">
            <span className="text-xl">
                <FaArrowLeft />
            </span>
        </div>
        <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 bg-gray-300 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10">
            <span className="text-xl">
                <FaArrowRight />
            </span>
        </div> */}
    </div>
  )
}

export default HeroCarousel
