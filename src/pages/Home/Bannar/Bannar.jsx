import React from "react";

const Bannar = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex">
      <ul className="w-[200px] h-[400px]  bg-white flex flex-col gap-1 px-1 justify-around">
        {arr.map((item) => (
          <li key={item}> This is product</li>
        ))}
      </ul>
      <div className="h-[400px] flex-1">
        <img
          className="h-full w-full"
          src="https://icms-image.slatic.net/images/ims-web/d9a9d4c8-b10b-4439-8e0e-bdffd5f1c85a.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Bannar;
