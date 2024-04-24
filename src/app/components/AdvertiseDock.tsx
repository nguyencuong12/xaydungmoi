import React from "react";
import Image from "next/image";

const AdvertiseDock = () => {
  return (
    <div className="docked-ad-container sticky top-[200px] left-0 w-[100%] h-[0px]   justify-between sm:flex hidden ">
      <div className="left-ad border ">
        <Image
          src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/1-3.png"
          alt="ss"
          sizes="100vw"
          width={0}
          height={0}
          className="h-auto w-full"
        ></Image>
      </div>
      <div className="right-ad border ">
        <Image
          src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/2-4.png"
          alt="ss"
          sizes="100vw"
          width={0}
          height={0}
          className="h-auto w-full"
        ></Image>
      </div>
    </div>
  );
};

export default AdvertiseDock;
