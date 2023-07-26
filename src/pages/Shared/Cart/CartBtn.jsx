import React from "react";
import { GiShoppingCart } from "react-icons/gi";
const CartBtn = () => {
  return (
    <div className="p-3 relative cursor-pointer">
      <GiShoppingCart size={24} />
      <span className="absolute top-0 right-0 text-D-primary font-semibold">
        0
      </span>
    </div>
  );
};

export default CartBtn;
