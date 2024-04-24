import React from "react";
import Image from "next/image";

const AdvertiseDock = () => {
  return (
    <div className="sticky top-[72px] flex justify-center">
      <div className="absolute">
        <div>
          <div className="left-banner w-[200px] h-[300px] absolute right-[100%] ">
            <Image
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/1-3.png"
              alt="ss"
              sizes="100vw"
              width={0}
              height={0}
              className="w-full h-auto border border-rose-500"
            ></Image>
          </div>
          <div className="w-[1450px]"></div>
          <div className="right-banner w-[200px] h-[300px] absolute left-[100%] ">
            <Image
              src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/2-4.png"
              alt="ss"
              sizes="100vw"
              width={0}
              height={0}
              className="w-full h-auto border border-rose-500"
            ></Image>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default AdvertiseDock;
