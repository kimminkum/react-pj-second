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

interface MainProps {
  windowWidth: number;
}

const Main: React.FC<MainProps> = ({ windowWidth }) => {
  return (
    <>
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
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_01.bba41750.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m01.c7b45578.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>주식회사 에이치엠씨네트웍스</h1>
                  <hr />
                  <h4>
                    환자존중 이념을 바탕으로 의료산업에 선한 영향력을
                    행사합니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>주식회사 에이치엠씨네트웍스</h2>
                  <p>
                    환자존중 이념을 바탕으로 의료산업에 선한 영향력을
                    행사합니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_02.bd47f48f.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m02.ed88ed49.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>HMC F&B</h1>
                  <hr />
                  <h4>
                    친환경 물류 인프라를 기반으로 3만 여종의 건강한 식자재를
                    병원 및 다수의 기관에 신선하게 공급합니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>HMC F&B</h2>
                  <p>
                    친환경 물류 인프라를 기반으로 3만 여종의 건강한 식자재를
                    병원 및 다수의 기관에 신선하게 공급합니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_03.7231785b.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m03.734b4617.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1 className="black_txt">HMC MEDICAL</h1>
                  <hr />
                  <h4 className="black_txt">
                    의료기기 및 의료, 임상, 복지 용품 등 약 3,000 여 가지의
                    의료소모품 유통 및 온-오프라인 판매를 진행합니다.
                  </h4>
                  <button className="img_button black_txt">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2 className="black_txt">HMC MEDICAL</h2>
                  <p className="black_txt">
                    의료기기 및 의료, 임상, 복지 용품 등 약 3,000 여 가지의
                    의료소모품 유통 및 온-오프라인 판매를 진행합니다.
                  </p>
                  <button className="img_button_m black_txt">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_04.944b1a50.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m04.9c4e7a32.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>오프라인 간병</h1>
                  <hr />
                  <h4>
                    다년간의 업계 경력 노하우로 60여 곳의 1,2,3차 의료기관에
                    간병 서비스를 안정적으로 연결하고 있습니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>오프라인 간병</h2>
                  <p>
                    다년간의 업계 경력 노하우로 60여 곳의 1,2,3차 의료기관에
                    간병 서비스를 안정적으로 연결하고 있습니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_04.944b1a50.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m04.9c4e7a32.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>HMC LAB.</h1>
                  <hr />
                  <h4>
                    환자의 의료 정보 및 이동을 기반으로 한 개인 맞춤형 연결
                    플랫폼으로 환자와 간병인, 의료기관을 연결하는 앱 서비스,
                    케어네이션을 개발합니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>HMC LAB.</h2>
                  <p>
                    환자의 의료 정보 및 이동을 기반으로 한 개인 맞춤형 연결
                    플랫폼으로 환자와 간병인, 의료기관을 연결하는 앱 서비스,
                    케어네이션을 개발합니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_04.944b1a50.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m04.9c4e7a32.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>HMC PAYMENT</h1>
                  <hr />
                  <h4>
                    간병비와 병원비 결제를 한 번에 할 수 있도록 온/오프라인 통합
                    결제 시스템 및 종합 정보 보호 솔루션 페이먼트를 구축합니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>HMC PAYMENT</h2>
                  <p>
                    간병비와 병원비 결제를 한 번에 할 수 있도록 온/오프라인 통합
                    결제 시스템 및 종합 정보 보호 솔루션 페이먼트를 구축합니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_04.944b1a50.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m04.9c4e7a32.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>Subsidiaries</h1>
                  <hr />
                  <h4>
                    헬스케어 시장 전체를 연결하는 비즈니스 서클을 구축하기 위해
                    다양한 파트너십을 형성하며 성장하고 있습니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>Subsidiaries</h2>
                  <p>
                    헬스케어 시장 전체를 연결하는 비즈니스 서클을 구축하기 위해
                    다양한 파트너십을 형성하며 성장하고 있습니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        </Swiper>

        {windowWidth > 1201 && (
          <div className="nav_pc">
            <div className="custom-navigation">
              <div className="custom-prev"></div>
              <div className="custom-next"></div>
            </div>
          </div>
        )}
        {windowWidth < 1200 && (
          <div className="custom-navigation nav_mb">
            <div className="custom-prev"></div>
            <div className="custom-next"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
