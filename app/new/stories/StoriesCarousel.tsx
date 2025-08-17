import React from 'react'
import BrandStoryCard from './StoriyCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Navigation , Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import HeaderText from '@/components/Text/header';


const brandStories = [
  {
    logo: '/images/logos/thematic.svg',
    brand: 'Thematic',
    description: 'با خودکارسازی پرداخت‌های جهانی و ورود هنرمندان، نیاز به ۳ عضو تیم را حذف کرد.',
    product: 'Mass Payments',
    region: 'United States, Global',
    industry: 'Music royalties',
    size: 'زیر ۱۰۰ نفر',
    bgColor: 'bg-[#FDF2E9]'
  },
  {
    logo: '/images/logos/logo_oracle-netsuite.svg',
    brand: 'T3 Micro',
    description: '۵۰٪ کاهش کار دستی، پرداخت بین‌المللی ساده، بدون افزایش نیرو.',
    product: 'AP Automation',
    region: 'United States, Global',
    industry: 'Software & Tech',
    size: '100 – 1000',
    bgColor: 'bg-[#E9F3F3]' // 🎨 رنگ خاص برای این برند
  },
  {
    logo: '/images/logos/jlab.svg',
    brand: 'JLab',
    description: 'افزایش بهره‌وری ۶۸٪، بدون افزودن نیرو، مدیریت ۳۵٪ فاکتور بیشتر.',
    product: 'AP Automation',
    region: 'United States',
    industry: 'E-Commerce & Retail',
    size: 'زیر ۱۰۰ نفر',
    bgColor: 'bg-[#E9F3F3]' // 🎨 رنگ خاص برای این برند
  },
    {
    logo: '/images/logos/next.svg',
    brand: 'T3 Micro',
    description: '۵۰٪ کاهش کار دستی، پرداخت بین‌المللی ساده، بدون افزایش نیرو.',
    product: 'AP Automation',
    region: 'United States, Global',
    industry: 'Software & Tech',
    size: '100 – 1000',
    bgColor: 'bg-[#FDF2E9]'
  },
  {
    logo: '/images/logos/legends-of-learning.svg',
    brand: 'JLab',
    description: 'افزایش بهره‌وری ۶۸٪، بدون افزودن نیرو، مدیریت ۳۵٪ فاکتور بیشتر.',
    product: 'AP Automation',
    region: 'United States',
    industry: 'E-Commerce & Retail',
    size: 'زیر ۱۰۰ نفر',
    bgColor: 'bg-[#E9F3F3]' // 🎨 رنگ خاص برای این برند
  },
]


const StoriesCarousel = () => {
  return (
    <div>
        <section className='bg-gray-100'>

            <div className='container w-[80%] mx-auto'>
                {/* <HeaderText content='مقالات سایت' className='' />
                <h2 className='text-3xl md:text-[3rem] font-yekan font-bold pt-6'>
                    آموزش حسابداری،
                    <br/>
                    نرم افزار و قوانین
                </h2> */}
                <div className='py-8'>
                    <Button variant={'destructive'} className='py-6 px-20'>دیدن همه مقالات</Button>

                    <Swiper
                        slidesPerView={4}
                        loop={true}
                        speed={10000}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                            slidesPerView: 1,
                            },
                            640: {
                            slidesPerView: 2,
                            },
                            1024: {
                            slidesPerView: 3,
                            },
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        modules={[Navigation , Autoplay]}

                        className="!overflow-visible"
                    >
                        {brandStories.map((story, idx) => (
                            <SwiperSlide key={idx}>
                                <BrandStoryCard key={idx} {...story} />
                            </SwiperSlide>
                            ))}
                    </Swiper>
                      {/* دکمه‌های جابجایی */}

                </div>
            </div>
        </section>
    </div>
  )
}

export default StoriesCarousel
