import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductCard = () => {
  return (
    <div className="w-[189px]">
      <img
        className="h-[189px] w-[189px]"
        src="https://static-01.daraz.com.bd/p/e68f4f0f00975fac75fcc24fc303f9a4.jpg_400x400q75-product.jpg_.webp"
        alt=""
      />
      <div className="p-2 bg-white">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iure.
        </h3>
        <span className="flex text-D-primary font-semibold">
          <TbCurrencyTaka size={24} />
          260
        </span>
        <p className="text-xs flex gap-1">
          <strike className="text-[#9e9e9e] flex">
            <TbCurrencyTaka />
            450
          </strike>
          <span className="text-D-darkGray">-54%</span>
        </p>
        <div className="flex gap-1 text-sm">
          <Rating style={{ maxWidth: 80 }} value={3} readOnly />
          <span className="text-[#9e9e9e]">(20)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
