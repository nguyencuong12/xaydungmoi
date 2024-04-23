// import HeavyComponent from "./components/heavyComponent";

import Image from "next/image";
import MegaMenu from "./components/MegaMenu";
import Link from "next/link";
import { MenuAdvertise } from "./components";
import { HighlightList1 } from "./data";
import SliderWithThreeItems from "./components/SliderWithThreeItems";

export default function Home() {
  return (
    <main className="min-h-[200vh]">
      <MegaMenu></MegaMenu>
      <section className="trend w-11/12 mx-auto mt-8 grid sm:grid-cols-4 grid-cols-2 gap-2">
        <Link href="#">
          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/Banner01.png"
            height={400}
            width={380}
            alt="ss"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/Banner01.png"
            height={400}
            width={380}
            alt="ss"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/Banner01.png"
            height={400}
            width={380}
            alt="ss"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/Banner01.png"
            height={400}
            width={380}
            alt="ss"
          ></Image>
        </Link>
      </section>
      <MenuAdvertise />

      <section className="brand mt-8 w-11/12 mx-auto">
        <h1 className="my-4">Thương Hiệu</h1>
        <div className="brand-wrapper flex  gap-2 justify-between ">
          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
            alt="bd"
            height={250}
            width={250}
          ></Image>
          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
            alt="bd"
            height={250}
            width={250}
          ></Image>
          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
            alt="bd"
            height={250}
            width={250}
          ></Image>

          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
            alt="bd"
            height={250}
            width={250}
          ></Image>

          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
            alt="bd"
            height={250}
            width={250}
          ></Image>

          <Image
            className="rounded-md drop-shadow-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
            src="https://mayxaydungmoi.com/wp-content/uploads/2023/09/1-2.png"
            alt="bd"
            height={250}
            width={250}
          ></Image>
        </div>
      </section>

      <section className="highlight-list w-11/12 mx-auto mt-8 bg-white px-4 py-2">
        <h1 className="my-4">Danh mục nổi bật</h1>
        <div className="flex gap-6">
          {HighlightList1.map((highlightItem, index) => {
            return (
              <Link href="#" key={index} className="flex flex-col items-center gap-2">
                <Image src={highlightItem.imageSrc} width={60} height={60} alt="SPNB"></Image>
                <span className="text-center"> {highlightItem.title}</span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="highlight-list-2 w-11/12 mx-auto mt-8 bg-white px-4 py-2">
        <div className="flex gap-6">
          {HighlightList1.map((highlightItem, index) => {
            return (
              <Link href="#" key={index} className="flex flex-col items-center gap-2">
                <Image src={highlightItem.imageSrc} width={60} height={60} alt="SPNB"></Image>
                <span className="text-center"> {highlightItem.title}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* <SliderWithThreeItems /> */}
    </main>
  );
}
