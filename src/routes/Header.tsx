import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "../css/Header.css";

import imgLogo from "../img/logo.png";
import {
  faChevronDown,
  faChevronUp,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  plusToggle: () => void;
  plusPopup: boolean;
}

const Header: React.FC<HeaderProps> = ({ plusToggle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [plusOpen, setPlusOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("KOR");
  const [hideHeader, setHideHeader] = useState<boolean>(false);

  const onSelect = () => setIsOpen(!isOpen);
  const onPlusSelect = () => setPlusOpen(!plusOpen);

  const onOptionClicked = (value: string, index: number) => () => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  useEffect(() => {
    // 이전 스크롤 위치를 저장하는 변수
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isTop = currentScrollPos === 0;

      if (isTop) {
        setHideHeader(false);
      } else {
        setHideHeader(true);
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${hideHeader ? "hide" : ""}`}>
      <div className="topbar show">
        <div className="flex_sb">
          {/* Logo */}
          <Link to="/">
            <div>
              <img src={imgLogo} alt="" />
            </div>
          </Link>

          <div>
            <input
              type="text"
              placeholder="주변 매장의 프로모션을 확인해보세요!"
            />
            <span className="paper">
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
          </div>

          <div>
            <ul className="flex_end">
              <a
                href="#"
                onClick={() => {
                  alert("준비중입니다.");
                }}
              >
                <li>로그인</li>
              </a>
              <a
                href="#"
                onClick={() => {
                  alert("준비중입니다.");
                }}
              >
                <li>회원가입</li>
              </a>
              <li className="lang">
                <div>
                  <div className="lang_title flex_center" onClick={onSelect}>
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
            </ul>
          </div>
        </div>
      </div>

      <div className="menu_nav topdog">
        <ul className="navList flex_sb">
          <li>
            <Link to="/menu/pizza">메뉴</Link>
          </li>
          <li
            onClick={() => {
              alert("준비중입니다.");
            }}
            style={{ cursor: "default" }}
          >
            e-쿠폰
          </li>
          <li
            onClick={() => {
              alert("준비중입니다.");
            }}
            style={{ cursor: "default" }}
          >
            상품권 선물
          </li>
          <li
            onClick={() => {
              alert("준비중입니다.");
            }}
            style={{ cursor: "default" }}
          >
            이벤트·제휴
          </li>
          <li
            onClick={() => {
              alert("준비중입니다.");
            }}
            style={{ cursor: "default" }}
          >
            매장검색
          </li>
          <li
            onClick={() => {
              alert("준비중입니다.");
            }}
            style={{ cursor: "default" }}
          >
            가맹점 모집
          </li>
          <li onClick={onPlusSelect} style={{ cursor: "pointer" }}>
            더보기
            {!plusOpen && <FontAwesomeIcon icon={faChevronDown} />}
            {plusOpen && <FontAwesomeIcon icon={faChevronUp} />}
          </li>
        </ul>

        {plusOpen && (
          <div className="plus_nav">
            <div className="flex">
              <div className="flex">
                <ul>
                  <a href="#">
                    <li>도미노 서비스</li>
                  </a>
                  <a href="#">
                    <li>매니아 혜택</li>
                  </a>
                  <a href="#">
                    <li>도미노 모멘트</li>
                  </a>
                  <a href="#">
                    <li>퀵오더</li>
                  </a>
                  <a href="#">
                    <li>단체주문 서비스</li>
                  </a>
                </ul>
                <ul>
                  <a href="#">
                    <li>고객센터</li>
                  </a>
                  <a href="#">
                    <li>자주하는 질문</li>
                  </a>
                  <a href="#">
                    <li>문의하기/칭찬</li>
                  </a>
                </ul>
                <ul>
                  <a href="#">
                    <li>회사소개</li>
                  </a>
                  <a href="#">
                    <li>한국도미노피자</li>
                  </a>
                  <a href="#">
                    <li>광고갤러리</li>
                  </a>
                  <a href="#">
                    <li>사회공헌활동</li>
                  </a>
                  <a href="#">
                    <li>가맹점 모집</li>
                  </a>
                  <a href="#">
                    <li>인재채용</li>
                  </a>
                </ul>
              </div>
              <div>
                <ul>
                  <a href="#">
                    <li>공지사항</li>
                  </a>
                  <a href="#">
                    <li>-도미노 뉴스</li>
                  </a>
                  <a href="#">
                    <li>-보도 자료</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
