import React from "react";

const TestimonialCard = ({ img, alt, name, para }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-white text-center text-sm">
      <div className="flex flex-col justify-center items-center">
        <img src={img} alt={alt} className="w-20 h-auto rounded-full" />
        <h1>{name}</h1>
      </div>
      <hr className="border-[1.25px] w-36 border-yellow-600" />
      <div className="px-20">
        <p className="tracking-tight italic">{para}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
