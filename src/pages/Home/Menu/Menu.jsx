import React from "react";
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const Menu = () => {
  return (
    <ul className="w-1/5 h-[400px]  bg-white flex flex-col gap-1 px-1 justify-around">
      {arr.map((item) => (
        <li key={item}> This is product</li>
      ))}
    </ul>
  );
};

export default Menu;
