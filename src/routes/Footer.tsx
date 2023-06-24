import React, { useState } from "react";
import "../css/Footer.css";

import imgLogo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faBlog
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGooglePlay,
  faApple,
  faFacebookF,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

// interface FooterProps {
//   windowWidth: number;
//   onToggle: () => void;
// }

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedValue, setSelectedValue] = React.useState<string>("KOR");

  const onSelect = () => setIsOpen(!isOpen);
  const onOptionClicked = (value: string, index: number) => () => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="footer">
      <div className="flex_sb">
        <div>
          <div className="flex">
            <img src={imgLogo} alt="" />
            <h2>1577-3082</h2>
          </div>

          <div>
            <ul>
              <a href="#">
                <li>이용약관</li>
              </a>
              <a href="#">
                <li className="black">개인정보처리방침</li>
              </a>
              <a href="#">
                <li className="black">위치기반서비스</li>
              </a>
              <a href="#">
                <li>청소년보호방침</li>
              </a>
              <a href="#">
                <li>고객센터</li>
              </a>
              <a href="#">
                <li>인재채용</li>
              </a>
              <a href="#">
                <li>가맹점모집</li>
              </a>
              <a href="#">
                <li>단체주문</li>
              </a>
            </ul>
          </div>

          <div>
            <small>
              06223 서울특별시 강남구 역삼로25길 35(역삼동, 청오큐브타워)
              청오디피케이㈜｜대표이사 : 오광현,김영훈
            </small>
            <small>
              사업자 등록번호: 220-81-03371｜통신판매업신고: 강남
              5064호｜개인정보 보호책임자 : 윤여진｜민원 책임자 : 이열우
            </small>
            <small>문의 : webmaster@dominos.co.kr</small>
            <small>Copyright ⓒ Domino’s Pizza. All rights reserved.</small>
          </div>

          <div>
            <small>
              청오디피케이㈜의 사전 서면동의 없이 도미노피자 사이트(PC, 모바일,
              앱)의 일체의 정보, 콘텐츠 및 UI 등을 상업적 목적으로 전재, 전송,
              스크래핑 등 무단 사용할 수 없습니다.
            </small>
            <small>
              도미노피자에서 판매되는 모든 상품은 청오디피케이㈜에서 책임지고
              있습니다.
            </small>
          </div>
        </div>

        <div>
          <ul className="flex_end">
            <li className="lang">
              <div>
                <div className="lang_title flex_sb" onClick={onSelect}>
                  <p>{selectedValue}</p>
                  {!isOpen && <FontAwesomeIcon icon={faChevronDown} />}
                  {isOpen && <FontAwesomeIcon icon={faChevronUp} />}
                </div>
                <div className="lang_drop">
                  <div className="lang_container">
                    {isOpen && (
                      <ul>
                        <li onClick={onOptionClicked("KOR", 1)}>KOR</li>
                        <li onClick={onOptionClicked("ENG", 2)}>ENG</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </li>
            <li>
              DOWNLOAD APP <FontAwesomeIcon icon={faApple} />
              <FontAwesomeIcon icon={faGooglePlay} />
            </li>
            <li>
              <FontAwesomeIcon icon={faBlog} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </ul>
        </div>
      </div>

      <div>
        <ul>
          <li>
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/list_awards.png"
              alt=""
            />
            <p>
              식품안전
              <br />
              경영시스템 인증
            </p>
          </li>
          <li>
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/list_awards2.png"
              alt=""
            />
            <p>
              지식경제부
              <br />
              우수디자인 선정
            </p>
          </li>
          <li>
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/list_awards3.png"
              alt=""
            />
            <p>
              2022년 고객이 가장 추천하는 기업
              <br />
              피자전문점 부문 10년 연속 1위
            </p>
          </li>
          <li>
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/list_awards4.png"
              alt=""
            />
            <p>
              2022년 한국산업 고객만족도
              <br />
              피자전문점 부문 8년 연속 1위
            </p>
          </li>
          <li>
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/list_awards5.png"
              alt=""
            />
            <p>
              2022 프리미엄브랜드지수
              <br />
              피자전문점 부문 7년 연속 1위 수상
            </p>
          </li>
          <li>
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/list_awards6.png"
              alt=""
            />
            <p>
              대학생 1000명이 선택한
              <br />
              2019 올해의 핫 브랜드 캠퍼스 잡앤조이 선정
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
