import React from "react";

interface HeadingLineProps {
  title: string;
}
const HeadingLine = ({ title }: HeadingLineProps) => {
  return (
    <div className="mb-8">
      <h1 className="border-b-4 border-[#F88114] rounded-md inline-block text-[#F88114] text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default HeadingLine;
