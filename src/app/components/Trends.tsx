import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WrapperSection, GalleryMobileVersion } from "./";

const Trends = () => {
  const listImage = [{}, {}, {}, {}];

  return (
    <WrapperSection>
      {/* <div className="trends-content ">
        <div className="content-pc sm:grid hidden  md:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-4">
          {listImage.map((value, index) => {
            return (
              <Link href="#" key={index}>
                <Image
                  className="w-full h-full object-cover rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
                  src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/Banner01.png"
                  height={0}
                  width={0}
                  sizes="100vw"
                  quality={100}
                  alt="ss"
                ></Image>
              </Link>
            );
          })}
        </div>
        <div className="content-mobile block sm:hidden">
          <GalleryMobileVersion
            listItemsJSX={listImage.map((value, index) => {
              return (
                <Link href="#" key={index}>
                  <Image
                    className="w-full h-full  object-cover rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
                    src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/Banner01.png"
                    height={0}
                    width={0}
                    sizes="100vw"
                    quality={100}
                    alt="ss"
                  ></Image>
                </Link>
              );
            })}
          />
        </div>
      </div> */}
    </WrapperSection>
  );
};

export default Trends;
