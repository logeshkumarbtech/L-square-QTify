import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./Carousel.module.css";
import LeftCarousel from "./LeftArrow/LeftCarousel";
import RightCarousel from "./RightArrow/RightCarousel";

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={10}
        spaceBetween={0}
        allowTouchMove
      >
        <LeftCarousel />
        <RightCarousel />
        {data.map((item) => (
          <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
