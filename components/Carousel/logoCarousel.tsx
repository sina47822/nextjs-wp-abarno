// components/LogoCarousel.tsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function LogoCarousel() {
  const logos = [
    '/tip/kaleris-logo.svg',
    '/tip/kaleris-logo.svg',
    '/tip/kaleris-logo.svg',
    '/tip/kaleris-logo.svg',
    '/tip/kaleris-logo.svg',
  ];

  return (
    <section className='py-2'>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        loop={true}
        speed={7000}
        spaceBetween={30}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}

        className="mySwiper"
      >
        {logos.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-[100px]">
              <img src={src} alt={`logo-${index}`} className="h-24" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
