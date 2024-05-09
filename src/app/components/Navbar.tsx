"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Search, Menu, Send, XCircle } from "react-feather";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, toggle } from "@nextui-org/react";
import { MegaMenuItemsData, TopMenuList } from "../data";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  useEffect(() => {
    // if (toggleMobile) {
    //   document.body.classList.add("overflow-y-hidden");
    // } else {
    //   document.body.classList.remove("overflow-y-hidden");
    // }
  }, [toggleMobile]);
  return (
    <>
      <div className="banner-top h-16 w-full relative hidden sm:block">
        <Image
          src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/Banner-top-2.png"
          alt="banner top"
          fill={true}
          priority={true}
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      </div>
      <div className="banner-top h-10 w-full relative block sm:hidden">
        <Image
          src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/Banner-top-2.png"
          alt="banner top"
          fill={true}
          quality={80}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      </div>

      <nav className="h-12 justify-center items-center bg-red-500 text-white hidden md:flex">
        {/* ///TOP MENU */}
        {TopMenuList.map((topMenuItem) => {
          return (
            <Link className="flex mx-2" href={topMenuItem.href} key={topMenuItem.id}>
              <topMenuItem.icon className="mx-2 text-white" size={22} />
              <p className="text-sm text-white">{topMenuItem.title}</p>
            </Link>
          );
        })}
      </nav>

      {/* Navbar fixed PC*/}
      <nav className="bg-white  min-h-24 hidden sm:block sticky top-[0px] z-50">
        <div className="mx-auto w-11/12 flex items-end justify-between ">
          <Link href="/">
            {/* <Image src={`${process.env.API_URL}/logo.png`} alt="Logo 123" height={250} width={250}></Image> */}
            <Image
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/08/mayxaydungmoi-logo-moi.png"
              alt="Logo 123"
              height={250}
              width={250}
            ></Image>
          </Link>
          <form className="relative  border border-grey-500 rounded-md pl-4 w-[600px] flex items-center justify-between mx-4 ">
            <input type="text" placeholder="Bạn muốn mua gì hôm nay?" className="text-sm outline-none w-full mr-2" />
            <Button isLoading color="success" size={"sm"} className="hidden"></Button>
            <Button isIconOnly aria-label="Like" className="bg-white">
              <Search />
            </Button>
            {/* <div className="absolute top-[40px] min-h-[150px] z-50 left-0 border border-grey-500  w-full p-2 bg-white text-sm ">Test Search</div> */}
          </form>

          <Link href="/gio-hang" className="flex items-center">
            <ShoppingCart color="gray" size={38} className="mx-4" />
            <span className="text-sm text-gray-500 max-w-[120px]">Giỏ hàng của bạn (1) sản phẩm</span>
          </Link>
        </div>
      </nav>

      {/* Navbar fixed mobile*/}
      <nav className="bg-white  min-h-20  block sm:hidden sticky w-full top-[0px] mt-2 z-50 py-2  ">
        <div className="w-11/12 mx-auto ">
          <div className=" flex items-end justify-between ">
            <Button
              isIconOnly
              aria-label="Like"
              className="bg-white"
              onClick={() => {
                setToggleMobile(!toggleMobile);
              }}
            >
              {toggleMobile ? <XCircle size={30} color="#1325A0"></XCircle> : <Menu size={30} color="#1325A0" />}
            </Button>
            <Link href="/">
              <Image
                src="https://mayxaydungmoi.com/wp-content/uploads/2023/08/mayxaydungmoi-logo-moi.png"
                alt="Logo"
                height={200}
                width={200}
              ></Image>
            </Link>
            <Button isIconOnly aria-label="Like" className="bg-white">
              <Send size={30} color="#1325A0" />
            </Button>
          </div>
          <form className=" my-4 relative   border border-grey-500 rounded-md pl-4 flex items-center justify-between">
            <input type="text" placeholder="Bạn muốn mua gì hôm nay?" className="text-sm outline-none w-full mr-2" />
            <Button isLoading color="success" size={"sm"} className="hidden"></Button>
            <Button isIconOnly aria-label="Like" className="bg-white">
              <Search />
            </Button>
            {/* <div className="absolute top-[40px] min-h-[150px] z-50 left-0 border border-grey-500  w-full p-2 bg-white text-sm ">Test Search</div> */}
          </form>
          {toggleMobile && <Sidebar />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
