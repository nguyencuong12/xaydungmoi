"use client";
import React from "react";
import Link from "next/link";
import ProductQuickView from "./CardProduct";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingLine from "./HeadingLine";
import WrapperSection from "./common/WrapperSection";
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
    <>
      <WrapperSection>
        {showHeader && (
          <div className="header text-white flex justify-between items-start px-4  ">
            <HeadingLine title="Bàn cắt gạch"></HeadingLine>
            <Link href="#" className="flex items-center gap-2 bg-gray-300 py-2 px-4 rounded-md ">
              Xem tất cả
            </Link>
          </div>
        )}
        <div>
          <Swiper
            {...params}
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
      </WrapperSection>
    </>
  );
};

export default ProductsByCategories;
