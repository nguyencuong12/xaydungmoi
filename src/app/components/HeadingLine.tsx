import React from "react";

interface HeadingLineProps {
  title: string;
}
const HeadingLine = ({ title }: HeadingLineProps) => {
  return (
    <div className="mb-8">
      <h1 className="border-b-4 border-[#000000] rounded-md inline-block text-[#000000]  font-bold">{title}</h1>
    </div>
  );
};

export default HeadingLine;
