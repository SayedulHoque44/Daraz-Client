import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const SwiperContainer = () => {
  return (
    <Swiper
      style={{ height: "100%" }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <img
          className="h-full w-full"
          src="https://icms-image.slatic.net/images/ims-web/d9a9d4c8-b10b-4439-8e0e-bdffd5f1c85a.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full"
          src="https://icms-image.slatic.net/images/ims-web/349814dd-3762-4ac0-bfd7-f094e2cf111e.jpg_1200x1200.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full"
          src="https://icms-image.slatic.net/images/ims-web/f0d16497-d654-4d0e-948a-a1d30929c433.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full"
          src="https://icms-image.slatic.net/images/ims-web/a50bd375-1282-4636-80ae-c61c26c1c6b2.jpg"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default SwiperContainer;
