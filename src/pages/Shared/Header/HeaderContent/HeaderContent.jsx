import React from "react";
import CartBtn from "../../Cart/CartBtn";
import SearchBox from "../SearchBox/SearchBox";

const HeaderContent = () => {
  return (
    <div className="flex justify-between h-20 items-center">
      <img
        className="h-10 "
        src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png"
        alt=""
      />
      <div className="flex items-center gap-5">
        <SearchBox />
        <CartBtn />
      </div>
      <img
        className="h-10"
        src="https://icms-image.slatic.net/images/ims-web/d998019b-9b34-44be-b747-1e6d5a892e2c.png"
        alt=""
      />
    </div>
  );
};

export default HeaderContent;
