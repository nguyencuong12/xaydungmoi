import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const ProductQuickView = (product: ProductInterface) => {
  return (
    <Link
      href="#"
      className="w-full rounded-sm p-4 flex flex-col gap-2 drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-4  duration-300"
    >
      <Card className="py-2 ">
        <CardBody className=" py-2">
          <Image
            src="https://mayxaydungmoi.com/wp-content/uploads/2024/03/but-cat-gach-RyobiPro.png"
            alt="butcatgach"
            width={200}
            height={200}
            className="mx-auto rounded-xl 
        "
            sizes="100vw"
          ></Image>

          {/* <Image alt="Card background" className="" src="/images/hero-card-complete.jpeg" width={270} /> */}
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">
          <h4 className="font-bold text-large">{product.name}</h4>
          <p className="text-tiny uppercase font-bold">{product.price}</p>
          <small className="text-default-500">{product.sale}</small>
        </CardFooter>
      </Card>
      {/* 
      <h3 className="text-center">{product.name}</h3>
      <p className="text-center">{product.price}</p>
      <p className="text-center">{product.sale}</p> */}
    </Link>
  );
};

export default ProductQuickView;
