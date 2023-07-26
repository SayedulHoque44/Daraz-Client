import React from "react";
import Menu from "../Menu/Menu";
import SwiperContainer from "../Swiper/SwiperContainer";

const Bannar = () => {
  return (
    <div className="flex">
      <Menu />
      <div className="h-[400px] flex-1 w-4/5">
        <SwiperContainer />
      </div>
    </div>
  );
};

export default Bannar;
