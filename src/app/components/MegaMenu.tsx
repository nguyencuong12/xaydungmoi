"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MegaMenuItemsData } from "../data";
import { Layers } from "react-feather";
import Link from "next/link";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import ProductQuickView from "./ProductQuickView";

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  return (
    // <div className="mega-menu w-full flex  sm:w-9/12 mx-auto  gap-2">
    //   <div className="categories min-w-[280px]  bg-white rounded-md relative hidden lg:block z-10 ">
    //     <ul className="menu-list">
    //       {MegaMenuItemsData.map((menuItem, index) => (
    //         <li className="hover:bg-[#eee] p-2 " key={index} onMouseEnter={() => toggleMenu(index)} onMouseLeave={() => toggleMenu(index)}>
    //           <Link href={menuItem.href ?? "/"} className="flex gap-2 items-center">
    //             <Layers size={15} /> {menuItem.title}
    //           </Link>
    //           {activeMenu === index && (
    //             <div className="sub-menu absolute top-0 z-50 left-[280px] w-[1000px] h-full bg-white border border-grey-500 rounded-md  ">
    //               <div className="grid grid-cols-3 gap-4 mx-2 my-4">
    //                 {menuItem.subItems.map((subItem, subIndex) => (
    //                   <a key={subIndex} href={subItem.subItemHref} className="hover:text-red-500">
    //                     {subItem.subItemTitle}
    //                   </a>
    //                 ))}
    //               </div>
    //             </div>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className=" main-banner border border-green-500 w-[calc(100%-500px)] ">
    //     {/* <Swiper
    //       slidesPerView={1}
    //       // install Swiper modules
    //       modules={[Navigation, Pagination, Scrollbar, A11y]}
    //       spaceBetween={30}
    //       pagination={{ clickable: true }}
    //       onSwiper={(swiper) => {}}
    //     >
    //       <SwiperSlide>
    //         <div>HEHEH</div>
    //       </SwiperSlide>
    //     </Swiper> */}
    //   </div>
    //   <div className="right-banner   hidden 2xl:flex  rounded-md flex-col gap-4 overflow-hidden ">
    //     <Image
    //       src="/banner.png"
    //       alt="testImg"
    //       width={0}
    //       height={0}
    //       quality={100}
    //       sizes="100vw"
    //       className="w-full h-[150px] object-cover rounded-md "
    //     ></Image>
    //     <Image
    //       src="/banner.png"
    //       alt="testImg"
    //       sizes="100vw"
    //       width={0}
    //       height={0}
    //       quality={100}
    //       className="w-full h-[150px] object-cover rounded-md"
    //     ></Image>
    //     <Image
    //       src="/banner.png"
    //       alt="testImg"
    //       sizes="100vw"
    //       width={0}
    //       height={0}
    //       quality={100}
    //       className="w-full h-[150px] object-cover rounded-md"
    //     ></Image>
    //   </div>
    // </div>
    <div className="mega w-full lg:w-9/12 mx-auto  flex gap-2">
      <div className="mega-left bg-white rounded-md relative  w-[350px] hidden md:block h-[550px]  ">
        <ul className="menu-list">
          {MegaMenuItemsData.map((menuItem, index) => (
            <li className="hover:bg-[#eee] p-2 " key={index} onMouseEnter={() => toggleMenu(index)} onMouseLeave={() => toggleMenu(index)}>
              <Link href={menuItem.href ?? "/"} className="flex gap-2 items-center">
                <Layers size={15} /> {menuItem.title}
              </Link>
              {activeMenu === index && (
                <div className="sub-menu absolute top-0 z-50 left-[225px] w-[1000px] h-full bg-white border border-grey-500 rounded-md  ">
                  <div className="grid grid-cols-3 gap-4 mx-2 my-4">
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <a key={subIndex} href={subItem.subItemHref} className="hover:text-red-500">
                        {subItem.subItemTitle}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mega-center   w-full lg:w-[calc(100%-490px)] md:w-[calc(100%-200px)] lg:w-[calc(100%-50px)] overflow-hidden">
        <div className="block-sliding-home h-[550px]">
          <Swiper
            className="h-full"
            slidesPerView={1}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {}}
          >
            <SwiperSlide>
              <a>
                <img src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/11-2.png" className=" rounded-md h-full w-full object-cover"></img>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a>
                <img src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/11-2.png" className="rounded-md  h-full w-full object-cover"></img>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mega-right w-[265px] hidden xl:block ">
        <div className="content-right max-w-[265px] h-[550px] w-full flex flex-col gap-4 justify-between">
          <a>
            <img src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/11-2.png" className="h-[150px] w-full object-cover rounded-md"></img>
          </a>
          <a>
            <img src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/11-2.png" className="h-[150px] w-full object-cover rounded-md"></img>
          </a>
          <a>
            <img src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/11-2.png" className="h-[150px] w-full object-cover rounded-md"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
