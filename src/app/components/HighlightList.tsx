"use client";
import React from "react";
import { HighLightList1, HighlightList2 } from "../data";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingLine from "./HeadingLine";
import WrapperSection from "./common/WrapperSection";
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
      <WrapperSection className="bg-white p-4 rounded-md">
        <HeadingLine title="Danh mục nổi bật" />
        <Swiper
          {...params}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
        >
          {HighLightList1.map((highlightItem, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href="#" className="flex flex-col items-center gap-2">
                  <Image src={highlightItem.imageSrc} width="0" height="0" sizes="100vw" className="w-[50px] h-[50px]" alt="SPNB"></Image>
                  <span className="text-center "> {highlightItem.title}</span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </WrapperSection>

      <WrapperSection className="bg-white py-6 px-4 rounded-md">
        <Swiper
          {...params}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
        >
          {HighlightList2.map((highlightItem, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href="#" className="flex flex-col items-center gap-1">
                  <Image src={highlightItem.imageSrc} width="0" height="0" sizes="100vw" className="w-[50px] h-[50px]" alt="SPNB"></Image>
                  <span className="text-center "> {highlightItem.title}</span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </WrapperSection>
    </>
  );
};

export default HighlightList;
