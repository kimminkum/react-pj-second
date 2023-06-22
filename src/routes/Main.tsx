import React from "react";
import "swiper/swiper.min.css";

import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../css/Main.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// interface MainProps {
//   isPopup: boolean;
// }

const Main: React.FC = () => {
  return (
    <div>
      <div className="banner">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
          autoplay={{ delay: 3000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box"></div>

              <div className="txt_box"></div>
            </div>
          </SwiperSlide>

          <div className="custom-navigation nav_mb">
            <div className="custom-prev"></div>
            <div className="custom-next"></div>
          </div>

          <div className="custom-navigation">
            <div className="custom-prev"></div>
            <div className="custom-next"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Main;
