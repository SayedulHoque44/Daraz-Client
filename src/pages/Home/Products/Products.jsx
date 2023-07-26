import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Title from "../../Shared/Common/Title";
const Products = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <div>
      <Title text={"Just For You"} />
      <div className="flex my-3 flex-wrap justify-center gap-3 ">
        {arr.map((item) => (
          <div key={item} className="w-[189px]">
            <img
              className="h-[189px] w-[189px]"
              src="https://static-01.daraz.com.bd/p/e68f4f0f00975fac75fcc24fc303f9a4.jpg_400x400q75-product.jpg_.webp"
              alt=""
            />
            <div className="p-2 bg-white">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                iure.
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
