// app/components/BannerOne.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { FaShoppingCart } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../shared/container';

export default function BannerOne() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: false, // We'll implement our own dots
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false,
    centerPadding: '0px',
    cssEase: 'ease-in-out',
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true, // Keep arrows enabled on mobile for consistency
        },
      },
    ],
  };

  // Sample slides data - in a real app this would come from props or API
  const heroSlides = Array(10).fill(0); // 10 slides with the new Apple Watch slide

  return (
    <Container>
      <div className="banner mt-8 relative">
        <div className="container mx-auto">
          <div className="banner-item rounded-xl overflow-hidden relative arrow-center bg-orange-500">

            {/* === نوار شیشه‌ای: مثلثی از چپ بالا تا پایین راست (نیمه چپ) === */}

            {/* دسکتاپ */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background: 'rgba(255, 255, 255, 0.28)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                clipPath: 'polygon(0 0, 65% 0, 35% 100%, 0 100%)',
              }}
            />

            {/* موبایل */}
            <div
              className="absolute inset-0 block md:hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.28)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                clipPath: 'polygon(0 0, 100% 0, 0% 100%, 0 100%)', // نصف مورب
              }}
            />




            {/* اسلایدر — محتوای اصلی */}
            <div className="banner-slider h-1/3   relative z-20">
              <Slider {...settings}>

                {/* اسلاید 1: آیفون 17 پرو مکس */}
      

                {/* اسلاید 2: ایرپاد پرو 3 */}
                <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl text-center lg:text-left p-4 p">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        ایرپاد پرو 3
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        سکوت، قدرت، آزادی
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        حذف نویز 3 برابر قوی‌تر، صدای فضایی با Dolby Atmos، 30 ساعت شارژ
                      </p>
                      <Link href="/shop/airpods-pro-3">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          کشف کنید
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/airpod.png"
                        alt="ایرپاد پرو 3"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* اسلاید 3: اپل ویژن پرو */}
                <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl text-center lg:text-left p-4">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        اپل ویژن پرو
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        واقعیت، دوباره تعریف شد
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        نمایشگر 4K در هر چشم، کنترل با چشم و دست، 12 دوربین
                      </p>
                      <Link href="/shop/vision-pro">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          تجربه کنید
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/apple-vision.png"
                        alt="ویژن پرو"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* اسلاید 4: آیپد پرو */}
                <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl text-center lg:text-left p-4">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        آیپد پرو
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        قدرت در اندازه‌ای کوچک
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        پردازنده M4، نمایشگر Liquid Retina XDR 13 اینچ، پشتیبانی از اپل پنسل
                      </p>
                      <Link href="/shop/ipad-pro">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          خرید آیپد پرو
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/ipad-pro.png"
                        alt="آیپد پرو"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* اسلاید 5: پلی‌استیشن 5 */}
                <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl text-center lg:text-left p-4">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        پلی‌استیشن 5
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        دنیای بازی‌های نسل جدید
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        پردازنده مرکزی AMD Zen 2، گرافیک RDNA 2، کنترلر دوچرخه‌ای پULSE 3D
                      </p>
                      <Link href="/shop/ps5">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          خرید PS5
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/ps5.png"
                        alt="پلی‌استیشن 5"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* اسلاید 6: مک‌بوک پرو 16 اینچ */}
                <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl text-center lg:text-left p-4">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        مک‌بوک پرو 16 اینچ
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        قدرت حرفه‌ای
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        پردازنده M3 Max، نمایشگر Liquid Retina XDR، 96 گیگابایت حافظه یونیفاید
                      </p>
                      <Link href="/shop/macbook-pro">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          خرید مک‌بوک پرو
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/macbook.png"
                        alt="مک‌بوک پرو"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* اسلاید 7: مجیک موس */}
                <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl text-center lg:text-left p-4">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        مجیک موس
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        طراحی انقلابی
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        حس‌گرهای Force Touch، طراحی بدون کلید، شارژ بی‌سیم
                      </p>
                      <Link href="/shop/magic-mouse">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          خرید مجیک موس
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/magic-mouse.png"
                        alt="مجیک موس"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* اسلاید 8: هدفون بیتس */}
                <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl text-center lg:text-left p-4">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        هدفون بیتس
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        صدای بی‌نظیر
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        کیفیت صدای Hi-Fi، نویز کنسلینگ پیشرفته، باتری 40 ساعت
                      </p>
                      <Link href="/shop/headphone-bites">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          خرید هدفون بیتس
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/headphone-bites.png"
                        alt="هدفون بیتس"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
          <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl p-4 text-center lg:text-left">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        آیفون 17 پرو مکس
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        آینده در دستان شماست
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        پردازنده A19، دوربین 48 مگاپیکسل با زوم 10x، نمایشگر 120 هرتز
                      </p>
                      <Link href="/shop/iphone-17-pro-max">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          همین حالا بخرید
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/iphone1.png"
                        alt="آیفون 17 پرو مکس"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
                {/* اسلاید 9: اسپیکر JBL */}
                <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl text-center lg:text-left p-4">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        اسپیکر JBL
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        قدرت صوتی
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        صدای بی‌نقص با باس 500W، مقاوم در برابر آب، شارژ 24 ساعت
                      </p>
                      <Link href="/shop/jbl-speakers">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          خرید اسپیکر JBL
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/jbl-speakers.png"
                        alt="اسپیکر JBL"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* اسلاید 10: اپل واچ */}
                <div className="h-full flex items-center px-4 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <div className="max-w-xl text-center lg:text-left p-4">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        اپل واچ
                      </h2>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mt-2">
                        سلامت و ورزش در مچ دست شما
                      </h3>
                      <p className="mt-3 text-white/80 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                        صفحه نمایش Always-On Retina، سنسورهای سلامت پیشرفته، مقاومت در برابر آب
                      </p>
                      <Link href="/shop/apple-watch">
                        <a className="mt-6 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all">
                          خرید اپل واچ
                          <FaShoppingCart className="w-5 h-5" />
                        </a>
                      </Link>
                    </div>
                    <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      <img
                        src="/assets/images/banner/applewatch.png"
                        alt="اپل واچ"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
          
          {/* Custom Dot Indicators - Unified for both mobile and desktop */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  // Move to the clicked slide
                  const slider = document.querySelector('.slick-slider');
                  if (slider) {
                    (slider as any).slickGoTo(index);
                  }
                }}
                className={`w-2 h-2 md:w-2 md:h-2 rounded-full transition-all duration-300 ease-in-out ${
                  index === currentSlide ? "bg-white w-8 md:w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}