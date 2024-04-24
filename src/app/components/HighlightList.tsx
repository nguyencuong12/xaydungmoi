"use client";
import React from "react";
import { HighlightList1 } from "../data";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const HighlightList = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    // Define breakpoints
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 10,
        spaceBetween: 30,
      },
    },
  };

  return (
    <>
      <section className="highlight-list w-11/12 sm:w-9/12 mx-auto mt-8 bg-white p-4 rounded-md min-h-[180px]">
        <h1 className="my-4">Danh mục nổi bật</h1>
        <Swiper
          {...params}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
        >
          {HighlightList1.map((highlightItem, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href="#" className="flex flex-col items-center gap-2">
                  <Image src={highlightItem.imageSrc} width="0" height="0" sizes="100vw" className="w-[50px] h-[50px]" alt="SPNB"></Image>
                  <span className="text-center"> {highlightItem.title}</span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="highlight-list-2  w-11/12 sm:w-9/12 mx-auto mt-8 bg-white p-4 rounded-md min-h-[180px] flex items-end">
        <Swiper
          {...params}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
        >
          {HighlightList1.map((highlightItem, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href="#" className="flex flex-col items-center gap-1">
                  <Image src={highlightItem.imageSrc} width="0" height="0" sizes="100vw" className="w-[50px] h-[50px]" alt="SPNB"></Image>
                  <span className="text-center"> {highlightItem.title}</span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default HighlightList;
