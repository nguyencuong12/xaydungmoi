import React, { forwardRef } from "react";

import clsx from "clsx";

type Ref = HTMLDivElement;

type BodyProps = {
  type?: string;
  className?: string;
  children?: React.ReactNode;
  id?: string;
};

const WrapperSection = forwardRef<Ref, BodyProps>((props) => {
  const { className, children, id } = props;
  const merged = clsx("w-full lg:w-8/12 mx-auto bg-transparent  mb-[40px] scroll-mt-[100px] ", className);
  return (
    <section className={merged} id={id}>
      {children}
    </section>
  );
});

export default WrapperSection;
