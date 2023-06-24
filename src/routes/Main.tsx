import React, { useState } from "react";
import "swiper/swiper.min.css";

import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "../css/Main.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import eventModal from "../img/event.png";

interface MainProps {
  windowWidth: number;
}

const Main: React.FC<MainProps> = ({ windowWidth }) => {
  const [modalUp, setModalUp] = useState<boolean>(true);

  const offModal = () => {
    setModalUp(false);
  };

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

      {windowWidth > 1240 && modalUp && (
        <div className="modal_box">
          <div className="modals">
            <img src={eventModal} alt="" />
            <span className="xBtn" onClick={offModal}>
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </div>
        </div>
      )}

      {windowWidth < 1240 && modalUp && (
        <div className="modals_mb">
          <img src={eventModal} alt="" />
          <span className="xBtn" onClick={offModal}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      )}
    </div>
  );
};

export default Main;
