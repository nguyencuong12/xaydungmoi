"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import ProductQuickView from "./CardProduct";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ProductsByCategories = (categories: CategoryInterface) => {
  const { showHeader, category, backgroundColor } = categories;

  const params = {
    slidesPerView: 1,
    spaceBetween: 10,
    // Define breakpoints
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  };

  return (
    <section className={`my-4 p-4  mx-auto h-[auto] ${backgroundColor} rounded-md`}>
      {showHeader && (
        <div className="header text-white flex justify-between items-center border-b-1 border-white pb-4  ">
          <h1 className="font-semibold text-sm md:text-xl sm:text-lg">{category}</h1>
          <Link href="#" className="flex items-center gap-2 font-semibold text-sm md:text-xl sm:text-lg">
            <span> Xem tất cả</span>
            <ArrowRight></ArrowRight>
          </Link>
        </div>
      )}
      <div className="mt-4 ">
        <Swiper
          {...params}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
        >
          <SwiperSlide>
            <ProductQuickView name="Bút cắt gạch" price={500} sale={400} description="hihi"></ProductQuickView>
          </SwiperSlide>
          <SwiperSlide>
            <ProductQuickView name="Bút cắt gạch" price={500} sale={400} description="hihi"></ProductQuickView>
          </SwiperSlide>
          <SwiperSlide>
            <ProductQuickView name="Bút cắt gạch" price={500} sale={400} description="hihi"></ProductQuickView>
          </SwiperSlide>
          <SwiperSlide>
            <ProductQuickView name="Bút cắt gạch" price={500} sale={400} description="hihi"></ProductQuickView>
          </SwiperSlide>
          <SwiperSlide>
            <ProductQuickView name="Bút cắt gạch" price={500} sale={400} description="hihi"></ProductQuickView>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsByCategories;
