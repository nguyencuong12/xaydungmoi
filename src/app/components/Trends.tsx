import React from "react";
import Link from "next/link";
import Image from "next/image";
const Trends = () => {
  return (
    <section className="trend w-11/12 sm:w-9/12 mx-auto mt-8 grid sm:grid-cols-4 grid-cols-2 gap-4">
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
  );
};

export default Trends;
