import { Button } from '@/components/ui/button'
import React from 'react'
import styles from '../styles/main.module.css'
import SvgAnimation from './SvgAnimation'

interface HeroCarouselProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  onCtaClick?: () => void
  showAnimation?: boolean
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  title,
  subtitle,
  description,
  ctaText = 'درخواست جلسه ارزیابی رایگان',
  onCtaClick,
  showAnimation = true,
}) => {
  return (
    <section className="bg-gray-100 flex items-center justify-center py-10">
      <div className={styles.gridBackground}>
        <div className="flex items-center justify-center md:justify-between mx-auto py-10 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[500px]">
          {/* بخش متن */}
          <div className="z-2 w-[100%] md:w-[80%] flex flex-col justify-self-center md:justify-self-auto">
            <div className="text-white font-bold font-yekan text-3xl text-justify pb-8">
              {title}
            </div>
            {subtitle && (
              <div className="text-white font-yekan text-xl text-justify">
                {subtitle}
              </div>
            )}
            {description && (
              <div className="text-white text-md text-justify pb-8">
                {description}
              </div>
            )}
            {ctaText && (
              <div className="grid">
                <Button
                  variant={'destructive'}
                  className="text-md py-6 px-4 btn-block cursor-pointer"
                  onClick={onCtaClick}
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>

          {/* بخش انیمیشن */}
          {showAnimation && (
            <div>
              <SvgAnimation />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel