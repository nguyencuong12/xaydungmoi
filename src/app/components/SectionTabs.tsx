"use client";
import React, { useRef, useState } from "react";
import ProductsByCategories from "./ProductsByCategories";
import ProductQuickView from "./CardProduct";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import HeadingLine from "./HeadingLine";
import ActionButton from "./ActionButton";
import CardProduct from "./CardProduct";

const MenuAdvertise = () => {
  const menus = [
    {
      title: "Bàn cắt gạch",
    },
    {
      title: "Dụng cụ điện cầm tay",
    },
    {
      title: "Máy hàn điện tử",
    },
  ];
  const menusContent = [
    {
      image: "/banner.png",
      title: "title",
    },
    {
      image: "/banner.png",
      title: "title",
    },
    {
      image: "/banner.png",
      title: "title",
    },
    {
      image: "/banner.png",
      title: "title",
    },
  ];

  const [selectProductType, setSelectProductType] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const onChooseProductType = (index: number) => {
    setSelectProductType(index);
    swiperRef.current?.swiper.slideTo(index);
  };
  return (
    <section className="w-full md:w-9/12 mx-auto section-services mt-[20px] py-4 px-4 scroll-mt-[100px] pb-[120px]" id="products">
      <div className="container mx-auto">
        <div className="product-content flex sm:flex-row flex-col mt-[30px] gap-4">
          <div className="product-left w-full md:w-1/5  sm:w-2/4  flex sm:flex-col flex-row sm:gap-8 gap-2 bg-white p-4 border border-[#D8D8D8] rounded-lg ">
            {menus.map((menu, index) => {
              return (
                <button
                  onClick={() => onChooseProductType(index)}
                  className={`px-6 ${
                    selectProductType == index && "active"
                  } active shape-product p-2 overflow-hidden flex items-center justify-center text-xs sm:text-sm lg:text-base  flex grow  sm:flex-row flex-col min-h-[100px] gap-2 items-center  rounded-lg font-semibold border border-[#D8D8D8]`}
                >
                  {/* <img src={menu.icon} className="w-[50px]"></img> */}
                  <p>{menu.title}</p>
                </button>
              );
            })}
          </div>
          <div className="product-right md:w-4/5 sm:w-2/4 w-full min-h-[300px] border border-[#D8D8D8] rounded-lg bg-white py-4">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              pagination={{ clickable: true }}
            >
              {menusContent.map((productSelect, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CardProduct name="qsd" price={200} description="sdq" sale={200}></CardProduct>
                    {/* <img src={productSelect.image} className="  md:h-[500px] max-h-[300px] object-cover  w-full"></img>
                    <div className="product-detail-content flex flex-col gap-4 mt-4">
                      <h2 className="font-semibold text-md sm:text-lg">{productSelect.title}</h2>
                      <p className="text-sm sm:text-md  font-light text-[#A5A3BA]">Descrtiption</p>
                      <a href="#" className="text-[#18A8FA] text-sm sm:text-md ">
                        Read more
                      </a>
                    </div> */}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    // <section className=" introduce w-11/12 sm:w-9/12 mx-auto mt-8  rounded-md min-h-[450px] flex flex-col bg-white ">
    //   <div className="flex ">
    //     {/* activeMenu === index */}

    //     {menus.map((menu, index) => {
    //       return (
    //         <div
    //           key={index}
    //           className={`${
    //             activeMenu == index ? "bg-gradient-to-r from-cyan-500 to-blue-500" : "bg-grey-500"
    //           } grow p-4 text-center cursor-pointer rounded-t-lg`}
    //           onClick={() => {
    //             toggleMenu(index);
    //           }}
    //         >
    //           <h1 className="font-semibold text-sm md:text-xl sm:text-lg"> {menu.title}</h1>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <div className="grow bg-gradient-to-r from-cyan-500 to-blue-500">
    //     <ProductQuickView name="Bút cắt gạch" price={500} sale={400} description="hihi"></ProductQuickView>
    //     {/* <ProductsByCategories showHeader={false} category=""></ProductsByCategories> */}
    //   </div>
    // </section>
  );
};

export default MenuAdvertise;
