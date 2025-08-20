import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-100 text-gray-800 py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Grid برای بخش‌های مختلف فوتر */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* بخش 1: درباره شرکت */}
          <div className="footer-about">
            <h3 className="text-lg font-bold mb-4">حسابداری هوشمند</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              ما شریک استراتژیک کسب‌وکارهای کوچک هستیم. با مشاوره حسابداری سفارشی و گزارش سرمایه در گردش، حساب‌هایتان را مرتب کرده و جریان مالی‌تان را شفاف می‌کنیم.
            </p>
          </div>

          {/* بخش 2: لینک‌های مفید */}
          <div className="footer-links">
            <h3 className="text-lg font-bold mb-4">لینک‌های مفید</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>
                <Link href="/about" className="hover:text-green-400">درباره ما</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400">خدمات حسابداری برای کسب‌وکارهای کوچک</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-400">مقالات آموزشی</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400">تماس با ما</Link>
              </li>
            </ul>
          </div>

          {/* بخش 3: فرم تماس کوتاه */}
          {/* <div className="footer-contact">
            <h3 className="text-lg font-bold mb-4">تماس سریع</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full p-2 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full p-2 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <select
                className="w-full p-2 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:border-green-400"
              >
                <option value="">نیاز خود را انتخاب کنید</option>
                <option value="working-capital">گزارش سرمایه در گردش</option>
                <option value="accounting">مرتب‌سازی حسابداری</option>
                <option value="consulting">مشاوره حسابداری سفارشی</option>
              </select>
              <Button variant={'destructive'}
                type="submit"
                className="w-full p-2 text-gray-800 rounded-md hover:bg-gray-300"
              >
                ارسال درخواست
              </Button>
            </form>
          </div> */}

          {/* بخش 3: اطلاعات تماس */}
          <div className="footer-info">
            <h3 className="text-lg font-bold mb-4">اطلاعات تماس</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>تلفن: <a href="tel:+989123456789" className="hover:text-green-400">۰۹۱۹۴۲۲۰۳۳۸</a></li>
              <li>ایمیل: <a href="mailto:info@yourcompany.com" className="hover:text-green-400">info@abarnoakhtar.ir</a></li>
              <li>آدرس: تهران، میدان ونک، اتوبان حقانی، پلاک ۴۰</li>
            </ul>
          </div>
          {/* بخش 4: اطلاعات تماس */}

          <div className="footer-contact flex flex-col items-end">
            <img src="/logo/gandom-01-02.svg" alt="abarnoakhtar-logo"  width={'150px'}/>
            
            <div className="mt-4 flex space-x-4 space-x-reverse">
              <a href="https://t.me/yourcompany" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-400 w-[25px]">
                <svg width='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#0F0F0F"/>
                </svg>
              </a>
              <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-400 mx-2 w-[25px]">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="100%" viewBox="0 0 169.063 169.063" xmlSpace="preserve">
                  <g>
                    <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
                    <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
                    <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z"/>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* بخش کپی‌رایت */}
        <div className="footer-disclaimer mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-700 text-sm">
            © 2020–2025 شرکت حسابداری هوشمند ابرنواختر. تمامی حقوق محفوظ است. | 
            <Link href="/privacy" className="hover:text-green-400 mx-2">سیاست حریم خصوصی</Link> |
            <Link href="/terms" className="hover:text-green-400 mx-2">شرایط استفاده</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
