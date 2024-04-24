"use client";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BrandData } from "../data";
const Brands = () => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 20,
    // Define breakpoints
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  };

  return (
    <section className="brand mt-8 w-11/12 sm:w-9/12 mx-auto bg-white rounded-md p-4">
      <h1 className="my-2">Thương Hiệu</h1>
      <div className="brand-wrapper py-6 my-2 ">
        <Swiper
        
          {...params}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
        >
          {BrandData.map((brand, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  loading="lazy"
                  className="h-auto  object-contain w-full rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
                  src={brand.imageSrc}
                  alt="bd"
                  quality={100}
                  // height={200}
                  // width={200}
                  width={0}
                  height={0}
                  sizes="100vw"
                ></Image>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
