import React from "react";
import Title from "../../Shared/Common/Title";
import ProductCard from "./ProductCard";
const Products = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <div>
      <Title text={"Just For You"} />
      <div className="flex my-3 flex-wrap justify-center gap-3 ">
        {arr.map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
      <div className="flex justify-center py-5">
        <button className="border-2 border-D-primary text-D-primary  py-2 px-20 uppercase font-semibold">
          load more
        </button>
      </div>
    </div>
  );
};

export default Products;
