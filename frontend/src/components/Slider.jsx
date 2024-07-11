import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={`mySwiper ${styles.swiper}`}
      >
        <SwiperSlide className={`${styles.swiperSlide} overlay`}>
          <img
            src="https://suvidhafoundationedutech.org/img/Suvidha-5.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide} overlay`}>
          <img
            src="https://suvidhafoundationedutech.org/img/Suvidha-3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide} overlay`}>
          <img
            src="https://suvidhafoundationedutech.org/img/Suvidha-1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
