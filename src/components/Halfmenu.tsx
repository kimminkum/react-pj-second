import React, { useState } from "react";
import makeData from "../data/makeData";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Accordion from "../components/Accordion";

const Halfmenu: React.FC = () => {
  const [leftPizza, setLeftPizza] = useState<string>("");
  const [rightPizza, setRightPizza] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [origin, setOrigin] = useState<boolean>(false);
  const [double, setDouble] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("첫번째 메뉴");
  const [selectedValue2, setSelectedValue2] = useState<string>("두번째 메뉴");
  const [btnClickedL, setBtnClickedL] = useState<boolean>(true);
  const [btnClickedM, setBtnClickedM] = useState<boolean>(false);

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const [douToggle1, setDouToggle1] = useState<boolean>(false);
  const [douToggle2, setDouToggle2] = useState<boolean>(false);
  const [douToggle3, setDouToggle3] = useState<boolean>(false);
  const [douToggle4, setDouToggle4] = useState<boolean>(false);

  const [onbase, setOnBase] = useState<boolean>(false);
  const [topping, setTopping] = useState<number>(0);

  const onSelect = () => {
    setIsOpen(!isOpen);
    setIsOpen2(false);
  };
  const onSelect2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen(false);
  };
  const onSizeClicked = (size: string) => {
    setBtnClickedL(false);
    setBtnClickedM(false);
    if (size === "L") {
      setBtnClickedL(true);
    } else if (size === "M") {
      setBtnClickedM(true);
    }
  };

  const onOptionClicked = (value: string, index: number) => () => {
    setSelectedValue(value);
    setIsOpen(false);
    setOrigin(false);
    setDouble(false);
    setLeftPizza("");
    setRightPizza("");
    setDouToggle1(false);
    setDouToggle2(false);
    setDouToggle3(false);
    setDouToggle4(false);
    if (index === 9999) {
      setSelectedValue2("두번째 피자");
    } else if (index === 0) {
      setOrigin(true);
    } else if (index === 1) {
      setDouble(true);
    }

    makeData.forEach((data) => {
      if (data.id === index) {
        setLeftPizza(data.img);
      }
    });
  };

  const onOptionClicked2 = (value: string, index: number) => () => {
    setSelectedValue2(value);
    setIsOpen2(false);
    setRightPizza("");

    setClickedIndex(index);

    if (index === 9998) {
      setDouToggle1(false);
      setDouToggle2(false);
      setDouToggle3(false);
      setDouToggle4(false);
    } else if (selectedValue === "뉴욕 오리진" && index !== 9998) {
      setDouToggle1(true);
      setDouToggle2(true);
      setDouToggle3(true);
      setDouToggle4(true);
    } else if (selectedValue === "뉴욕 오리진 더블치즈엣지" && index !== 9998) {
      setDouToggle1(true);
      setDouToggle2(false);
      setDouToggle3(false);
      setDouToggle4(false);
    }

    makeData.forEach((data) => {
      if (data.id === index) {
        setRightPizza(data.img);
      }
    });
  };

  return (
    <div className="product">
      <div className="inner_box">
        <div className="half flex_sb">
          <div className="left_dou">
            <div>
              {leftPizza === ""
                ? false
                : true && <img src={leftPizza} alt="" />}
              {rightPizza === ""
                ? false
                : true && (
                    <img
                      className={clickedIndex === 9998 ? "clicked" : ""}
                      src={rightPizza}
                      alt=""
                    />
                  )}
            </div>
          </div>

          <div className="select_box">
            <div className="select_pizza">
              <h4>피자 선택</h4>
              <ul>
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
                            <li onClick={onOptionClicked("첫번째 피자", 9999)}>
                              첫번째 피자
                            </li>
                            <li onClick={onOptionClicked("뉴욕 오리진", 0)}>
                              뉴욕 오리진
                            </li>
                            <li
                              onClick={onOptionClicked(
                                "뉴욕 오리진 더블치즈엣지",
                                1
                              )}
                            >
                              뉴욕 오리진 더블치즈엣지
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </li>

                <li className="lang">
                  <div>
                    <div className="lang_title flex_sb" onClick={onSelect2}>
                      <p>{selectedValue2}</p>
                      {!isOpen2 && <FontAwesomeIcon icon={faChevronDown} />}
                      {isOpen2 && <FontAwesomeIcon icon={faChevronUp} />}
                    </div>
                    <div className="lang_drop">
                      <div className="lang_container">
                        {isOpen2 && origin && (
                          <ul>
                            <li onClick={onOptionClicked2("두번째 피자", 9998)}>
                              두번째 피자
                            </li>
                            <li onClick={onOptionClicked2("베이컨체더치즈", 2)}>
                              베이컨체더치즈
                            </li>
                            <li onClick={onOptionClicked2("슈퍼디럭스", 3)}>
                              슈퍼디럭스
                            </li>
                          </ul>
                        )}
                        {isOpen2 && double && (
                          <ul>
                            <li onClick={onOptionClicked2("두번째 피자", 9998)}>
                              두번째 피자
                            </li>
                            <li
                              onClick={onOptionClicked2(
                                "리얼불고기 더블치즈엣지",
                                4
                              )}
                            >
                              리얼불고기 더블치즈엣지
                            </li>
                            <li
                              onClick={onOptionClicked2(
                                "베이컨체더치즈 더블치즈엣지",
                                5
                              )}
                            >
                              베이컨체더치즈 더블치즈엣지
                            </li>
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
                <button
                  onClick={() => onSizeClicked("L")}
                  className={`btn-type4 ${btnClickedL ? "act" : ""}`}
                >
                  L
                </button>
                <button
                  onClick={() => onSizeClicked("M")}
                  className={`btn-type4 ${btnClickedM ? "act" : ""}`}
                >
                  M
                </button>
              </div>
            </div>

            <div className="select_dou">
              <div className="flex_sb">
                <h4>도우 선택</h4>

                <p className="orange">ⓘ도우의 특징</p>
              </div>

              <div>
                <div>
                  <input
                    type="radio"
                    id="origin"
                    name="dou"
                    value="origin"
                    disabled={!douToggle1}
                    checked={
                      douToggle1 && !douToggle2 && !douToggle3 && !douToggle4
                    }
                  />
                  <label
                    htmlFor="origin"
                    className={!douToggle1 ? "disabled-label" : ""}
                  >
                    오리지널 도우
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="napoly"
                    name="dou"
                    value="napoly"
                    disabled={!douToggle2}
                    checked={
                      douToggle1 && douToggle2 && !douToggle3 && !douToggle4
                    }
                  />
                  <label
                    htmlFor="napoly"
                    className={!douToggle2 ? "disabled-label" : ""}
                  >
                    나폴리 도우
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="thin"
                    name="dou"
                    value="thin"
                    disabled={!douToggle3}
                    checked={
                      douToggle1 && douToggle2 && douToggle3 && !douToggle4
                    }
                  />
                  <label
                    htmlFor="thin"
                    className={!douToggle3 ? "disabled-label" : ""}
                  >
                    씬 도우(기본 갈릭디핑 소스 미제공)
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="super"
                    name="dou"
                    value="super"
                    disabled={!douToggle4}
                    checked={
                      douToggle1 && douToggle2 && douToggle3 && douToggle4
                    }
                  />
                  <label
                    htmlFor="super"
                    className={`expensive ${
                      !douToggle4 ? "disabled-label" : ""
                    }`}
                  >
                    슈퍼시드 화이버 함유 도우
                    <span>+3000원</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="select_topping">
              <div className="war_topping orange">ⓘ토핑 알레르기 유발성분</div>
              <Accordion title="토핑추가" date="">
                <p>*토핑 추가는 피자 한판 당 5개까지 추가 가능</p>

                <div>
                  <ul className="tabs">
                    <li className={`tabs_main`}>메인</li>
                    <li className={`tabs_cheeese`}>치즈</li>
                    <li className={`tabs_after`}>애프터</li>
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
