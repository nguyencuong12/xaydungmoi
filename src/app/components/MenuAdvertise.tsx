"use client";
import React, { useState, useEffect } from "react";

const MenuAdvertise = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(0);
  useEffect(() => {
    //FETCH BAN CAT GACH FRIST TIME !!
  });
  useEffect(() => {
    if (activeMenu) {
      console.log("CLAL");
    }
  }, [activeMenu]);

  const toggleMenu = (index: number) => {
    // setIsMenuOpen(!isMenuOpen);
    setActiveMenu(activeMenu === index ? null : index);
  };

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
  return (
    <section className=" introduce w-11/12 mx-auto mt-8  rounded-md min-h-[450px] flex flex-col ">
      <div className="flex ">
        {/* activeMenu === index */}
        {menus.map((menu, index) => {
          return (
            <div
              key={index}
              className={`${activeMenu == index ? "bg-green-500" : "bg-grey-500"} grow p-4 text-center cursor-pointer rounded-t-lg`}
              onClick={() => {
                toggleMenu(index);
              }}
            >
              {menu.title}
            </div>
          );
        })}
      </div>
      <div className="grow bg-green-500">SAN PHAM HIEN THI</div>
    </section>
  );
};

export default MenuAdvertise;
