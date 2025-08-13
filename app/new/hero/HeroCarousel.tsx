import { Button } from '@/components/ui/button'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import styles from '../styles/main.module.css'

const HeroCarousel = () => {
  return (
    <div>
        <section className='bg-gray-100 flex items-center justify-center py-2'>
            <div className={styles.gridBackground}>
                <div className='flex items-center justify-center md:justify-between mx-auto py-10 items-center w-[90%] grid grid-cols-1 md:grid-cols-2 gap-5 '>
                    <div className='z-2 w-[100%] md:w-[80%] flex flex-col justify-self-center md:justify-self-auto'>
                        <div className='text-white font-bold font-yekan text-3xl text-justify'>
                            کاهش هزینه های مالی با رعایت پیشرفته‌ترین الزامات مالی ابرنواختر
                        </div>
                        <div className=' text-white text-md text-justify py-8'>
                            راهکارهای انطباق مالی ابرنواختر کنترل‌های دقیقی بر عملیات پرداخت و حساب‌های پرداختنی ارائه می‌دهد. با استفاده از این راهکارها، امنیت داده‌های مالی حساس افزایش می‌یابد، انطباق مستمر با مقررات OFAC تضمین می‌شود و نظارت مدیریتی بر فرآیندهای کلیدی پرداخت بهبود می‌یابد.
                        </div>
                        <div className='grid'>
                            <Button variant={'destructive'} className='text-md py-6 px-4 btn-block'>
                                درخواست جلسه ارزیابی کسب و کار
                            </Button> 
                        </div>
                    </div>
                    <div className=''>
                        <img src={'/tip/controls-compliance-header.svg'} />
                    </div>
                </div>
            </div>
        </section>
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
