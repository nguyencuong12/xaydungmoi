"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface bodyProps {
  listItemsJSX: Array<JSX.Element>;
}
const GalleryMobileVersion = (props: bodyProps) => {
  const { listItemsJSX } = props;

  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
      {listItemsJSX.map((item, index) => {
        return <SwiperSlide key={index}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default GalleryMobileVersion;
