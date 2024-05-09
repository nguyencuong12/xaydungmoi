// import HeavyComponent from "./components/heavyComponent";

import MegaMenu from "./components/MegaMenu";

import React, { Suspense } from "react";

import { Trends, ProductsByCategories, AdvertiseDock, Loading, WrapperSection } from "./components";
import dynamic from "next/dynamic";
import Image from "next/image";

const DynamicMenuAdvertise = dynamic(() => import("./components/SectionTabs"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});
const DynamicBrandsComponent = dynamic(() => import("./components/Brands"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});
const DynamicHighlightsComponent = dynamic(() => import("./components/HighlightList"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});
const DynamicProductByCategoryComponent = dynamic(() => import("./components/ProductsByCategories"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});

const DynamicAdvertiseComponent = dynamic(() => import("./components/AdvertiseDock"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});
export default function Home() {
  return (
    <main className="py-10">
      <MegaMenu></MegaMenu>
      <Trends />
      <DynamicAdvertiseComponent />
      <DynamicMenuAdvertise />
      <DynamicHighlightsComponent />
      <DynamicProductByCategoryComponent showHeader={true} category="Bàn cắt gạch" />

      {/* <div className="w-11/12 sm:w-11/12 mx-auto my-10">
        <Image
          alt="banner test"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[350px] object-cover"
          src="https://mayxaydungmoi.com/wp-content/uploads/2023/10/5.png"
        ></Image>
      </div> */}
      <DynamicBrandsComponent></DynamicBrandsComponent>

      <div className="w-11/12 sm:w-9/12 mx-auto">
        <h1 className="my-4 border-b-2 border-grey-500">Kênh Youtube</h1>
        <iframe
          className="w-full h-[500px]"
          src="https://www.youtube.com/embed/WiguOH9H644?si=0aHLUkgQNV5W9EXX"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </main>
  );
}
