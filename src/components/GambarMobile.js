import React from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import gambar1 from "../images/image-product-1.jpg";
import gambar2 from "../images/image-product-2.jpg";
import gambar3 from "../images/image-product-3.jpg";
import gambar4 from "../images/image-product-4.jpg";

SwiperCore.use([Navigation, Autoplay]);

SwiperCore.use([Navigation]);

const GambarMobile = () => {
  return (
    <div className="slider_image">
      <Swiper
        lazy={true}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={gambar1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gambar2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gambar3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gambar4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GambarMobile;
