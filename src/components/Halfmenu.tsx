import React, { useState } from "react";
import makeData from "../data/makeData";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Accordion from "../components/Accordion";

const Halfmenu: React.FC = () => {
  const [leftPizza, setLeftPizza] = useState<string>("");
  const [rightPizza, setRightPizza] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("첫번째 메뉴");
  const [topping, setTopping] = useState<number>(0);

  const onSelect = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string, index: number) => () => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="product">
      <div className="inner_box">
        <div className="flex">
          <div className="left_dou">
            <img
              src="https://cdn.dominos.co.kr/domino/pc/images/menu/pizza_pan.png"
              alt=""
            />
            <div className="flex_center">
              <img src={leftPizza} alt="" />
              <img src={rightPizza} alt="" />
            </div>
          </div>

          <div className="select_box">
            <div className="select_pizza">
              <h4>피자 선택</h4>
              <ul>
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

                <small>
                  * 하프앤하프 시그니처는 [메뉴] {">"} [피자] 카테고리 또는
                  상단의 추천 메뉴에서 주문가능합니다.
                </small>
              </ul>
            </div>

            <div className="select_size">
              <h4>사이즈 선택</h4>
              <div className="flex_sb">
                <button className="btn1"> L </button>
                <button className="btn1"> M </button>
              </div>
            </div>

            <div className="select_dou">
              <div className="flex_sb">
                <h4>도우 선택</h4>

                <p className="orange">ⓘ도우의 특징</p>
              </div>

              <div>
                <input type="radio" id="origin" name="dou" value="origin" />
                <label htmlFor="origin">오리지널 도우</label>
                <input type="radio" id="napoly" name="dou" value="napoly" />
                <label htmlFor="napoly">나폴리 도우</label>
                <input type="radio" id="thin" name="dou" value="thin" />
                <label htmlFor="thin">씬 도우(기본 갈릭디핑 소스 미제공)</label>
                <input type="radio" id="super" name="dou" value="super" />
                <label htmlFor="super">슈퍼시드 화이버 함유 도우</label>
              </div>
            </div>

            <div className="select_topping">
              <Accordion title="토핑추가" date="ⓘ토핑 알레르기 유발성분">
                <small>*토핑 추가는 피자 한판 당 5개까지 추가 가능</small>

                <div>
                  <ul className="tabs">
                    <li className="tabs_main">메인</li>
                    <li className="tabs_cheeese">치즈</li>
                    <li className="tabs_after">애프터</li>
                  </ul>
                  <div>
                    <img src="" alt="" />
                    <div>
                      <p></p>
                      <p></p>
                    </div>
                    <div>
                      <button>-</button>
                      <button>{topping}</button>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>

            <div className="select_number">
              <h4>수량 선택</h4>
              <div>
                <button>-</button>
                <button>{topping}</button>
                <button>+</button>
              </div>
            </div>

            <div className="select_side">
              <h4>사이드디시</h4>
              <div>
                <ul className="tabs">
                  <li className="tabs_special">특가</li>
                  <li className="tabs_basic">일반</li>
                </ul>
                <div>
                  <img src="" alt="" />
                  <div>
                    <p></p>
                    <p></p>
                  </div>
                  <div>
                    <button>-</button>
                    <button>{topping}</button>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="drink_ect">
              <h4>음료&기타</h4>

              <div>
                <img src="" alt="" />
                <div>
                  <p></p>
                  <p></p>
                </div>
                <div>
                  <button>-</button>
                  <button>{topping}</button>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Halfmenu;
