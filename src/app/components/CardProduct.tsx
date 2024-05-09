import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const CardProduct = (product: ProductInterface) => {
  return (
    <Link
      href="#"
      className=" my-4 min-h-[350px] w-full bg-white  rounded-lg p-4 flex flex-col gap-2 drop-shadow-md transition ease-in-out delay-100 hover:-translate-y-4  duration-300"
    >
      <div className=" bg-no-repeat bg-center bg-cover absolute left-[-5px] top-[-1px] h-[30px] w-[80px] bg-[url('/discount.png')] ">
        <p className="text-white font-semibold text-center mt-[4px] text-xs"> Giảm 14%</p>
      </div>
      <Image
        src="/testP.webp"
        alt="butcatgach"
        width={0}
        height={0}
        className="w-full max-h-[180px] object-contain
        "
        sizes="100vw"
        quality={100}
      ></Image>

      <h3 className="product-name">Apple Watch Series 9 41mm (GPS) viền nhôm dây cao su | Chính hãng Apple Việt Nam</h3>
      <p className=" product-price">{product.price}</p>
    </Link>
  );
};

export default CardProduct;
