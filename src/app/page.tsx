// import HeavyComponent from "./components/heavyComponent";

import MegaMenu from "./components/MegaMenu";

import React, { Suspense } from "react";

import { Trends, ProductsByCategories, AdvertiseDock, Loading } from "./components";
import dynamic from "next/dynamic";

const DynamicMenuAdvertise = dynamic(() => import("./components/MenuAdvertise"), {
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

const DynamicAdvertiseComponent = dynamic(()=>import("./components/AdvertiseDock"),{
  ssr: false,
  loading: () => <Loading></Loading>,
})
export default function Home() {
  return (
    <main className="py-10">
      <MegaMenu></MegaMenu>
      <Trends />
      <DynamicAdvertiseComponent/>
      
      <DynamicMenuAdvertise />
      <DynamicBrandsComponent></DynamicBrandsComponent>
      <DynamicHighlightsComponent />
      <div className="w-11/12 sm:w-9/12 mx-auto ">
        <DynamicProductByCategoryComponent showHeader={true} category="" />
      </div>
    </main>
  );
}
