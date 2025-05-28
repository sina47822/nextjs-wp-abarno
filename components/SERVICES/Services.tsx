'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaBars, FaBlog, FaCalendarAlt, FaChartLine, FaCheck, FaClock, FaConciergeBell, FaEnvelope, FaFileInvoiceDollar, FaGlobeAmericas, FaGoogle, FaHome, FaInfoCircle, FaLightbulb, FaMapMarkerAlt, FaMicrosoft, FaPhoneAlt, FaPlus, FaRocket, FaShieldAlt, FaSignInAlt, FaStar, FaTimes, FaUserPlus, FaUsers } from "react-icons/fa";

const Services = () => {
  return (
    <div>
                <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              خدمات ما و قیمت گذاری
            </h2>

            <Tabs defaultValue="monthly" className="mb-6">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="monthly">ماهانه</TabsTrigger>
                <TabsTrigger value="annual">سالانه (تخفیف ۲۰٪)</TabsTrigger>
              </TabsList>

              <TabsContent value="monthly" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <CardTitle>پایه</CardTitle>
                    <CardDescription>
                      برای بیزینس های کوچک و فری لنسرها
                    </CardDescription>
                    <div className="mt-2">
                    <span className="text-gray-500 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-800">
                        ۱۰
                      </span>
                      <span className="text-gray-500 text-md">میلیون تومان</span>

                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          بیش از ۲۰ فاکتور ماهانه
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">گزارشات پایه</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">پشتیبانی ایمیلی</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">تک کاربره</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      شروع همکاری
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="py-0 pb-6">
                  <CardHeader className="py-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
                    <Badge className="bg-white text-teal-600 hover:bg-gray-100">
                      پرطرفدار
                    </Badge>
                    <CardTitle className="mt-2">حرفه ای</CardTitle>
                    <CardDescription className="text-teal-100">
                      برای بیزینس های در حال رشد
                    </CardDescription>
                    <div className="mt-2">
                      <span className="text-gray-50 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-50">
                        25
                      </span>
                      <span className="text-gray-50 text-md"> میلیون تومان</span>

                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">ایجاد فاکتور بدون محدودیت</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          تحلیل مالی و گزارش گیری پیشرفته
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          پشتیبانی آنلاین و ایمیل در اولویت
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">۵ کاربر</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">یاداوری پرداخت هزینه‌ها</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">برند سازی</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      شروع به همکاری
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <CardTitle>سازمانی</CardTitle>
                    <CardDescription>مناسب برای شرکت ها و سازمانهای بزرگ</CardDescription>
                    <div className="mt-2">
                      <span className="text-gray-500 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-600">
                        ۴۵
                      </span>
                      <span className="text-gray-500 text-md"> میلیون تومان</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          همه امکانات اکانت حرفه ای
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">بدون محدودیت تعداد کاربر</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          مدیر حساب اختصاصی
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">API دسترسی به</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          امکانات پیشرفته امنیتی
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      مذاکره با تیم ما
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="annual" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <CardTitle>پایه</CardTitle>
                    <CardDescription>
                      برای بیزینس های کوچک و فری لنسرها
                    </CardDescription>
                    <div className="mt-2">
                    <span className="text-gray-500 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-800">
                        ۸
                      </span>
                      <span className="text-gray-500 text-md"> میلیون تومان</span>

                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          بیش از ۲۰ فاکتور ماهانه
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">گزارشات پایه</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">پشتیبانی ایمیلی</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">تک کاربره</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      شروع همکاری
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="py-0 pb-6">
                  <CardHeader className="py-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
                    <Badge className="bg-white text-teal-600 hover:bg-gray-100">
                      پرطرفدار
                    </Badge>
                    <CardTitle className="mt-2">حرفه ای</CardTitle>
                    <CardDescription className="text-teal-100">
                      برای بیزینس های در حال رشد
                    </CardDescription>
                    <div className="mt-2">
                      <span className="text-gray-50 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-50">
                        ۲۰
                      </span>
                      <span className="text-gray-50 text-md"> میلیون تومان</span>

                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">ایجاد فاکتور بدون محدودیت</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          تحلیل مالی و گزارش گیری پیشرفته
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          پشتیبانی آنلاین و ایمیل در اولویت
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">۵ کاربر</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">یاداوری پرداخت هزینه‌ها</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">برند سازی</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      شروع به همکاری
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <CardTitle>سازمانی</CardTitle>
                    <CardDescription>مناسب برای شرکت ها و سازمانهای بزرگ</CardDescription>
                    <div className="mt-2">
                      <span className="text-gray-500 text-md">ماهانه </span>
                      <span className="text-3xl font-bold text-gray-600">
                        ۳۶
                      </span>
                      <span className="text-gray-500 text-md"> میلیون تومان</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          همه امکانات اکانت حرفه ای
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">بدون محدودیت تعداد کاربر</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          مدیر حساب اختصاصی
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">API دسترسی به</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2" />
                        <span className="text-sm">
                          امکانات پیشرفته امنیتی
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                      مذاکره با تیم ما
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="bg-gray-50 rounded-lg p-5 mb-6">
              <h3 className="font-medium text-gray-800 mb-3">
              نیاز به یک راه‌حل سفارشی دارید؟
              </h3>
              <p className="text-sm text-gray-600 mb-4">
              ما راه‌حل‌های متناسب با نیازهای خاص کسب‌وکار شما ارائه می‌دهیم. برای بررسی نیازهای خود با تیم فروش ما تماس بگیرید.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white !rounded-button">
                <FaPhoneAlt className="mr-2" />
                تماس با تیم فروش
              </Button>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-3">
              سؤالات متداول
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                    آیا می‌توانم پلن خود را ارتقا یا کاهش دهم؟
                  </h4>
                  <p className="text-sm text-gray-600">
                  بله، شما می‌توانید در هر زمانی پلن خود را ارتقا یا کاهش دهید. تغییرات در چرخه صورتحساب بعدی شما اعمال خواهند شد.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                  آیا نسخه آزمایشی رایگان وجود دارد؟
                  </h4>
                  <p className="text-sm text-gray-600">
                    بله، ما برای همه پلن‌ها نسخه آزمایشی ۱۴ روزه رایگان ارائه می‌دهیم. برای شروع نیازی به کارت بانکی نیست.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">
                    چه روش‌های پرداختی را قبول می‌کنید؟  
                  </h4>
                  <p className="text-sm text-gray-600">
                    ما از تمامی کارت‌های اعتباری اصلی و انتقال بانکی برای پلن‌های سالانه پشتیبانی می‌کنیم.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Services
