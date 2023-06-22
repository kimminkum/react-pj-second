import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../css/Header.css";

import imgLogo from "../img/logo.png";
import {
  faChevronDown,
  faChevronUp,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// interface HeaderProps {
//   offPopup: () => void;
// }

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedValue, setSelectedValue] = React.useState<string>("KOR");

  const onSelect = () => setIsOpen(!isOpen);
  const onOptionClicked = (value: string, index: number) => () => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex_sb topbar">
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
          <ul>
            <a href="#">
              <li>로그인</li>
            </a>
            <a href="#">
              <li>회원가입</li>
            </a>
            <a href="#">
              <li>
                <div>
                  <div className="category_box" onClick={onSelect}>
                    <p>{selectedValue}</p>
                    {!isOpen && <FontAwesomeIcon icon={faChevronDown} />}
                    {isOpen && <FontAwesomeIcon icon={faChevronUp} />}
                  </div>
                  <div className="drop_box">
                    <div className="drop_container">
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
            </a>
          </ul>
        </div>
      </div>

      <div className="menu_nav"></div>
    </div>
  );
};

export default Header;
