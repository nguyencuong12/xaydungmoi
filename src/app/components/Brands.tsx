"use client";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
      <div className="brand-wrapper p-4  ">
        <Swiper
          {...params}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
        >
          <SwiperSlide>
            <Image
              loading="lazy"
              className="h-auto  w-full rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
              alt="bd"
              quality={100}
              // height={200}
              // width={200}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              className="h-auto w-full rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
              alt="bd"
              // height={200}
              // width={200}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              className="h-auto w-full rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
              alt="bd"
              // height={200}
              // width={200}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              className="h-auto w-full rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
              alt="bd"
              // height={200}
              // width={200}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              className="h-auto w-full rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
              alt="bd"
              // height={200}
              // width={200}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              className="h-auto w-full rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
              alt="bd"
              // height={200}
              // width={200}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              className="h-auto w-full rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
              alt="bd"
              // height={200}
              // width={200}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
