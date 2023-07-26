import React from "react";
import Title from "../../Shared/Common/Title";

const Categories = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="my-10">
      <Title text={"Catagories"} />
      <div className="flex my-3 flex-wrap justify-center gap-[2px]">
        {arr.map((item) => (
          <div
            key={item}
            className="px-8 bg-white cursor-pointer flex flex-col items-center gap-2 py-5">
            <img
              className="h-[80px] w-[80px] "
              src="https://static-01.daraz.com.bd/p/16ca3d5c5d0c462b0482b5ba6574371d.jpg"
              alt=""
            />
            <h3 className="text-center">Fashion</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
