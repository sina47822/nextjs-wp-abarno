import { Button } from '@/components/ui/button'
import React from 'react'
import styles from './Homepage/styles/main.module.css'
import Link from 'next/link'

interface ShowcaseSectionProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  showCta?: boolean
  media?: React.ReactNode // هر چیزی مثل <img /> یا <SvgAnimation /> 
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText = 'درخواست جلسه ارزیابی رایگان',
  ctaHref,
  showCta = true, // ✅ پیش‌فرض: CTA نمایش داده شود
  media,
}) => {
    
  // فاصله‌ها را بر اساس بودن/نبودن CTA تنظیم می‌کنیم
  const titleClass = 'text-white font-bold font-yekan text-3xl text-justify pb-2'
  const subtitleClass = 'text-white font-yekan text-2xl text-justify pb-8'
  // اگر CTA نباشد، padding پایین توضیحات را کمتر می‌کنیم تا «جای دکمه» خالی نماند
  const descClass = `text-gray-400 text-lg text-justify ${showCta ? 'pb-8' : 'pb-2 md:pb-0'}`
  
  return (
    <section className="bg-white flex items-center justify-center py-10">
      <div className={styles.gridBackground}>
        <div className="flex items-center justify-center md:justify-between mx-auto py-10 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[500px]">
          {/* بخش متن */}
          <div className="z-2 w-[100%] md:w-[80%] flex flex-col justify-self-center md:justify-self-auto">
            <div className={titleClass}>
              {title}
            </div>
            {subtitle && (
              <div className={subtitleClass}>
                {subtitle}
              </div>
            )}
            {description && (
              <div className={descClass}>
                {description}
              </div>
            )}
            {/* CTA فقط وقتی showCta=true و لینک داریم */}
            {showCta && ctaText && ctaHref && (
              
              <div className="grid">
                <Button
                  variant={'destructive'}
                  className="text-md py-6 px-4 btn-block cursor-pointer"
                  asChild
                >
                  <Link href={ctaHref}>{ctaText}</Link>
                </Button>
              </div>
            )}
          </div>

          {/* بخش مدیا (انیمیشن / عکس / SVG) */}
          {media && <div>{media}</div>}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
