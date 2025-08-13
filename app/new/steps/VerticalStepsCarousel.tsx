'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaArrowAltCircleUp, FaArrowDown, FaArrowUp, FaRegArrowAltCircleDown } from 'react-icons/fa'

// داده نمونه مراحل
const steps = [
  {
    step: 1,
    title: 'Plan',
    description: 'Kickstart your success with a comprehensive setup call that reviews your manual AP workflow, outlines the onboarding plan, validates technical configurations, and prepares for training.',
    icon: '📝',
  },
  {
    step: 2,
    title: 'Configure',
    description: 'Customize and configure the system based on your unique workflows, roles, and needs.',
    icon: '🔧',
  },
  {
    step: 3,
    title: 'Train',
    description: 'Train your team to maximize efficiency and adoption of the system.',
    icon: '📚',
  },
  {
    step: 4,
    title: 'Launch',
    description: 'Go live with confidence and full support from our onboarding specialists.',
    icon: '🚀',
  },
  {
    step: 5,
    title: 'Launch',
    description: 'Go live with confidence and full support from our onboarding specialists.',
    icon: '🚀',
  },
]

const VerticalStepsCarousel = () => {
  return (
    <div className="w-full max-w-md mx-auto relative h-[500px]">
      {/* دکمه بالا */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-0 -translate-x-20 -translate-y-15 z-10 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer">
        <FaArrowUp />
      </div>

      {/* دکمه پایین */}
      <div className="swiper-button-next-custom absolute bottom-1/2 left-0 -translate-x-20 translate-y-15 z-10 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer">
        <FaArrowDown />
      </div>

      <Swiper
        direction="vertical"
        slidesPerView={2}
        spaceBetween={30}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[Navigation]}
        className="h-full py-12"
      >
        {steps.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3 h-[200px] justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 text-2xl rounded-lg p-3">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">Step {item.step}</p>
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