import React from "react";
import Link from "next/link";
import { MegaMenuItemsData } from "../data";

const Sidebar = () => {
  return (
    <div className="overflow-y-scroll h-[400px]">
      {MegaMenuItemsData.map((menuItem, index) => {
        return (
          <details className="bg-white shadow-rounded group mb-4" open={false} key={index}>
            <summary className="list-none flex flex-wrap items-center px-2">
              <Link href={menuItem.href ?? "/"} className="flex flex-1 p-4 font-semibold">
                {menuItem.title}
              </Link>
              <div className="flex w-10 items-center justify-center">
                <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left"></div>

                {/* <ArrowDown /> */}
              </div>
            </summary>
            <div className="px-6 ">
              {menuItem.subItems.map((subItem, index2) => {
                return (
                  <div key={index2} className="py-4">
                    <Link href={subItem.subItemHref}>{subItem.subItemTitle}</Link>
                  </div>
                );
              })}
            </div>
          </details>
        );
      })}
    </div>
  );
};

export default Sidebar;
