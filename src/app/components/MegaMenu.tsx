"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MegaMenuItemsData } from "../data";
import { Layers } from "react-feather";
const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const toggleMenu = (index: number) => {
    // setIsMenuOpen(!isMenuOpen);
    setActiveMenu(activeMenu === index ? null : index);
  };
  return (
    <div className="mega-menu flex w-11/12 mx-auto mt-2 gap-2 ">
      <div className="categories w-[390px] bg-white rounded-md relative hidden lg:block z-10">
        <ul className="menu-list">
          {MegaMenuItemsData.map((menuItem, index) => (
            <li className="hover:bg-[#eee] p-2 " key={index} onMouseEnter={() => toggleMenu(index)} onMouseLeave={() => toggleMenu(index)}>
              <a href="#" className="flex gap-2 items-center">
                <Layers size={15} /> {menuItem.title}
              </a>
              {activeMenu === index && (
                <div className="sub-menu absolute top-0 z-50 left-[285px] w-[1000px] h-full bg-white border border-grey-500 rounded-md  ">
                  <div className="grid grid-cols-3 gap-2 mx-2">
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

      <div className="main-banner grow rounded-md flex gap-2 ">
        <div className="left-banner ">
          <div className="relative h-[250px] sm:h-[400px]">
            <Image alt="test" src="/banner.png" quality={100} width="0" height="0" sizes="100vw" className="w-full h-full"></Image>
          </div>
          <div className="left-banner-down grid grid-cols-3 ">
            <Image alt="test1" src="/testW.webp" width={500} height={370}></Image>
            <Image alt="test1" src="/testW.webp" width={500} height={370}></Image>

            <Image alt="test1" src="/testW.webp" width={500} height={370}></Image>
          </div>
        </div>
        <div className="right-banner flex flex-col gap-2 hidden lg:block">
          <Image alt="test1" src="/testW.webp" width={400} height={370}></Image>
          <Image alt="test1" src="/testW.webp" width={400} height={370}></Image>
          <Image alt="test1" src="/testW.webp" width={400} height={370}></Image>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
