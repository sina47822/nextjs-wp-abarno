import { Button } from '@/components/ui/button'
import React from 'react'
import styles from './styles/main.module.css'
import LogoCarousel from '@/components/Carousel/logoCarousel'
import HeaderText from '@/components/Text/header'
const newFrontPage = () => {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <div
                className='overflow-hidden w-[100%]'
            >
                <nav className='flex mx-auto justify-between md:justify-between py-2 px-5 rounded-4xl'>
                    <div className='flex gap-3 items-center'>
                        <div>Nav Menu</div>
                        <Button variant='destructive' className='p-5 text-md' >Get Starts</Button>
                    </div>
                    <div>LOGO</div>
                </nav>
                <section className='bg-gray-100 flex items-center justify-center py-2'>
                    <div className={styles.gridBackground}>
                        <div className='flex items-center justify-center md:justify-between mx-auto py-10 items-center w-[90%] grid grid-cols-1 md:grid-cols-2 gap-5 '>
                            <div className='z-2 w-[100%] md:w-[80%] flex flex-col justify-self-center md:justify-self-auto'>
                                <div className='text-white text-bold text-3xl text-justify'>
                                    کاهش هزینه های مالی با رعایت پیشرفته‌ترین الزامات مالی ابرنواختر
                                </div>
                                <div className=' text-white text-md text-justify py-8'>
                                    راهکارهای انطباق مالی ابرنواختر کنترل‌های دقیقی بر عملیات پرداخت و حساب‌های پرداختنی ارائه می‌دهد. با استفاده از این راهکارها، امنیت داده‌های مالی حساس افزایش می‌یابد، انطباق مستمر با مقررات OFAC تضمین می‌شود و نظارت مدیریتی بر فرآیندهای کلیدی پرداخت بهبود می‌یابد.
                                </div>
                                <div className='grid'>
                                    <Button variant={'destructive'} className='text-md py-6 px-4 btn-block'>
                                        Request Demo
                                    </Button> 
                                </div>
                            </div>
                            <div className=''>
                                <img src={'/tip/controls-compliance-header.svg'} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-gray-100'>
                    <LogoCarousel />
                </section>
                <section className='bg-gray-100'>
                    <div className='flex justify-center items-center pb-[40px]'>
                        <div className='w-[80%] flex flex-col items-center justify-center'>
                            <HeaderText content='ویژگی‌های انطباق مالی' className='mb-2' />
                            <h2 className='py-2 text-3xl md:text-4xl text-bold '>کنترل کامل و امنیت بالا</h2>
                            <p className='text-lg text-justify'>
                                شما به نرم‌افزاری مالی نیاز دارید که در برابر کلاه‌برداری و ضررهای ناشی از آن محافظت کرده و فرآیندهای داخلی را با کنترل‌های مالی در سطح سازمانی تقویت کند. ما این نیاز شما را به‌طور کامل پوشش داده‌ایم.
                            </p>
                        </div>
                    </div>
                    {/* grid 1 */}
                    <div className='flex justify-center items-center py-10'>
                        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                            <div className='flex justify-center items-center'>
                                <img src="tip/role-based-access.svg" className='w-full' alt="compliance" />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-3xl md:text-4xl text-center py-4'>
                                    دسترسی مبتنی بر نقش و حسابرسی آسان‌شده
                                </h2>
                                <p className='text-justify'>
                                    بیش از ۲۰ سطح دسترسی مبتنی بر نقش به شما امکان می‌دهند تا تفکیک وظایف را به‌درستی اجرا کرده و تعیین کنید چه کسی می‌تواند پرداخت‌ها را آغاز کند، حساب‌ها را تأمین مالی کند، جریان‌های تأیید ایجاد کند، گزارش‌ها را اجرا کند و موارد دیگر. تأییدیه‌های فاکتور و پرداخت را به‌صورت خودکار بر اساس معیارهای تراکنش‌ها مسیردهی کنید. با امکانات داخلی ما شامل ردگیری حسابرسی، گزارش‌گیری و ذخیره اسناد، به‌آسانی برای حسابرسی آماده شوید.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* grid 2 */}
                    <div className='flex justify-center items-center py-10'>
                        <div className='w-[80%] grid md:grid-flow-col grid-row-2 grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                            <div className='flex md:col-start-2 justify-center items-center'>
                                <img src="tip/validate-suppliers.svg" className='w-full' alt="compliance" />
                            </div>                            
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-3xl md:text-4xl text-center py-4'>
                                   بررسی و تأیید تأمین‌کنندگان قبل از شروع همکاری
                                </h2>
                                <p className='text-justify'>
                                    قبل از اینکه با تأمین‌کننده‌ای کار کنی یا پرداختی براش انجام بدی، مطمئن شو که اطلاعاتش درسته. ما یه پورتال مخصوص تأمین‌کنندگان داریم که خودشون اطلاعات تماس، حساب بانکی و مالیاتی‌شون رو وارد می‌کنن. این اطلاعات به‌صورت خودکار با هزاران قانون بین‌المللی چک می‌شن تا از درستی‌شون مطمئن بشیم. حتی فرم‌های مالیاتی آمریکا هم با سیستم مورد تأیید KPMG بررسی می‌شن.    
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* grid 3 */}
                    <div className='flex justify-center items-center py-10'>
                        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='flex justify-center items-center'>
                                <img src="tip/ongoing-screening.svg" className='w-full' alt="compliance" />
                            </div>                            
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-3xl md:text-4xl text-center py-4'>
                                    جلوگیری از همکاری با افراد یا شرکت‌های مشکوک
                                </h2>
                                <p className='text-justify'>
                                    همه دریافت‌کننده‌ها (Payee) قبل از اینکه براشون پولی واریز بشه، به‌صورت خودکار در لیست‌هایی مثل «افراد ممنوع‌المعامله» یا لیست‌های بین‌المللی مثل OFAC (لیست تحریمی آمریکا)، ضدتروریسم و قاچاق مواد بررسی می‌شن. این کار باعث می‌شه از نظر قانونی و امنیتی دچار مشکل نشی.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* grid 4 */}
                    <div className='flex justify-center items-center py-10'>
                        <div className='w-[80%] grid md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='flex md:col-start-2 justify-center items-center'>
                                <img src="tip/electronic-payments.svg" className='w-full' alt="compliance" />
                            </div>                            
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-3xl md:text-4xl text-center py-4'>
                                    جلوگیری از کلاه‌برداری با پرداخت‌های الکترونیکی
                                </h2>
                                <p className='text-justify'>
                                    به‌جای چک‌های کاغذی که ممکنه جعلی باشن، از پرداخت‌های امن مثل ACH (پرداخت بانکی داخلی و بین‌المللی) یا انتقال بانکی استفاده کن. همچنین می‌تونی از قابلیتی به اسم Positive Pay استفاده کنی که جلوی سوءاستفاده از چک‌ها رو می‌گیره. حتی می‌تونی هزینه انتقال رو بین خودت و دریافت‌کننده تقسیم کنی تا اون هم راحت‌تر قبول کنه با روش‌های امن‌تر پول دریافت کنه. خوبی سیستم ما اینه که اگه پرداختی مشکوک باشه، بلافاصله شناسایی می‌شه و می‌تونی سریع جلوی ضرر رو بگیری.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* grid 5 */}
                    <div className='flex justify-center items-center py-10'>
                        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='flex justify-center items-center'>
                                <img src="tip/risk-checks.svg" className='w-full' alt="compliance" />
                            </div>                            
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-3xl md:text-4xl text-center py-4'>
                                    مدیریت هوشمند ریسک با سیستم تشخیص تقلب
                                </h2>
                                <p className='text-justify'>
                                    ما یه سیستم هوشمند به اسم Tipalti Detect™ داریم که قبل از اینکه مشکلی پیش بیاد، الگوهای مشکوک رو تشخیص می‌ده. مثلاً اگه یه نفر بخواد چندتا حساب با اسم‌های مختلف درست کنه یا کسی که قبلاً مسدود شده بخواد دوباره پول بگیره، سیستم سریعاً هشدار می‌ده. همچنین می‌تونی پرداخت‌هاش رو متوقف یا محدود کنی.
                                </p>
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
