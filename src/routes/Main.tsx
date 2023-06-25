import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPause,
  faMotorcycle,
  faStore,
  faBoltLightning
} from "@fortawesome/free-solid-svg-icons";

import "swiper/swiper.min.css";
import { Navigation, Scrollbar, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
  const [swiper, setSwiper] = useState<any>(null);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  const offModal = () => {
    setModalUp(false);
  };
  const toggleAutoPlay = () => {
    if (swiper) {
      if (isAutoPlay) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
    }
    setIsAutoPlay((prev) => !prev);
  };

  const handleSlideChange = () => {
    if (swiper) {
      const currentIndex = swiper.realIndex + 1;
      const totalSlides = swiper.slides.length;
      console.log(`Current Slide: ${currentIndex}/${totalSlides}`);
      const paginationElement = document.querySelector(".custom-pagination");
      if (paginationElement) {
        paginationElement.textContent = `${currentIndex} / ${totalSlides}`;
      }
    }
  };

  const renderPagination = () => {
    if (swiper && swiper.slides) {
      const currentIndex = swiper.realIndex + 1;
      const totalSlides = swiper.slides.length;

      return (
        <div className="custom-pagination">
          {currentIndex} / {totalSlides}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mainPage">
      <div className="banner">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
          autoplay={{ delay: 3000 }}
          onSlideChange={handleSlideChange}
          onSwiper={setSwiper}
          pagination={{
            el: ".custom-pagination",
            clickable: false
          }}
        >
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box">
                <img
                  src="https://cdn.dominos.co.kr/admin/upload/banner/20230613_g4d6wz3X.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box">
                <img
                  src="https://cdn.dominos.co.kr/admin/upload/banner/20230615_BOz6qNv3.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box">
                <img
                  src="https://cdn.dominos.co.kr/admin/upload/banner/20230621_L2eS8m23.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box">
                <img
                  src="https://cdn.dominos.co.kr/admin/upload/banner/20230621_9LYKHdZX.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box">
                <img
                  src="https://cdn.dominos.co.kr/admin/upload/banner/20230605_O6l0tugF.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box">
                <img
                  src="https://cdn.dominos.co.kr/admin/upload/banner/20230601_fJR93f3C.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box">
                <img
                  src="https://cdn.dominos.co.kr/admin/upload/banner/20230530_Wx88kl1O.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box">
                <img
                  src="https://cdn.dominos.co.kr/admin/upload/banner/20230619_7FJtdMp5.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              <div className="img_box">
                <img
                  src="https://cdn.dominos.co.kr/admin/upload/banner/20230619_4yCogMcv.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>

          <div className="custom-navigation">
            <div className="custom-prev">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="custom-next">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>

          <div className="slide-controls">
            <button onClick={toggleAutoPlay}>
              {isAutoPlay ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )}
            </button>

            {renderPagination()}
          </div>
        </Swiper>
      </div>

      <article className="delivery">
        <div className="inner_box">
          <div className="item_wrap">
            <div className="item">
              <a href="#">
                <FontAwesomeIcon icon={faMotorcycle} />
                <span className="text">배달 주문</span>
                <span className="arrow"></span>
              </a>
              <p>등급별 최대 30%</p>
            </div>
            <div className="item">
              <a href="#">
                <FontAwesomeIcon icon={faStore} />
                <span className="text">포장 주문</span>
                <span className="arrow"></span>
              </a>
              <p>등급별 최대 40%</p>
            </div>
            <div className="item">
              <a href="#">
                <FontAwesomeIcon icon={faBoltLightning} />
                <span className="text">퀵오더</span>
                <span className="arrow"></span>
              </a>
              <p>
                자주 이용하는 메뉴를
                <br /> 더 빠르게 주문해보세요!
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="grade">
        <div className="inner_box">
          <div className="grade-info">
            <div className="login">
              <div className="title">
                <div className="title-type2">
                  도미노피자의
                  <br />
                  <strong>특별한 매니아 혜택</strong>
                  <br />
                  누려보세요!
                </div>
              </div>
              <div className="btn">
                <a href="#" className="btn-type5">
                  로그인
                </a>
              </div>
            </div>
          </div>

          {/* slick 추가 또는 내가 */}
          <div className="event flex_center">
            <div>
              <a href="#">
                <img
                  src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card1.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card2.gif"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="https://cdn.dominos.co.kr/domino/pc/images/main/main_card5.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </article>

      {modalUp && (
        <div className="modals">
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
