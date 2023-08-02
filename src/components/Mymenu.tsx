import React, { useState } from "react";
import makeData from "../data/makeData";

import toppingData from "../data/toppingData";
import toppingCheese from "../data/toppingCheeseData";
import toppingAfterData from "../data/toppingAfterData";
import specialData from "../data/specialData";
import basicData from "../data/basicData";

import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Accordion from "../components/Accordion";
import toppingCheeseData from "../data/toppingCheeseData";

const Mymenu: React.FC = () => {
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
  const [btnClickedtomato, setBtnClickedtomato] = useState<boolean>(true);
  const [btnClickedboolgogi, setBtnClickedboolgogi] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [tabsIndex, setTabsIndex] = useState<number>(0);
  const [tabsSideIndex, setTabsSideIndex] = useState<number>(0);

  const [reactToppingData, setReactToppingData] = useState([...toppingData]);
  const [reactToppingCheeseData, setReactToppingCheeseData] = useState([
    ...toppingCheese
  ]);
  const [reactToppingAfterData, setReactToppingAfterData] = useState([
    ...toppingAfterData
  ]);
  const [reactSpecialData, setReactSpecialData] = useState([...specialData]);
  const [reactBasicData, setReactBasicData] = useState([...basicData]);
  const [maxTopping, setMaxTopping] = useState<number>(0);

  const [onbase, setOnBase] = useState<boolean>(false);
  const [firstPizza, setFirstPizza] = useState<boolean>(false);
  const [secondPizza, setSecondPizza] = useState<boolean>(false);

  const onSizeClicked = (size: string) => {
    setBtnClickedL(false);
    setBtnClickedM(false);
    if (size === "L") {
      setBtnClickedL(true);
    } else if (size === "M") {
      setBtnClickedM(true);
    }
  };

  const onSorceClicked = (sorce: string) => {
    setBtnClickedtomato(false);
    setBtnClickedboolgogi(false);
    if (sorce === "tomato") {
      setBtnClickedtomato(true);
    } else if (sorce === "boolgogi") {
      setBtnClickedboolgogi(true);
    }
  };

  const tabsClick = (index: number) => {
    setTabsIndex(index);
  };
  const tabsSideClick = (index: number) => {
    setTabsSideIndex(index);
  };

  const pizzaSelector = (first: boolean, second: boolean) => {
    if (!first) {
      alert("첫 번째 피자를 선택해주세요.");
    } else if (!second) {
      alert("두 번째 피자를 선택해주세요.");
    }
  };

  const onOptionClicked = (value: string, index: number) => () => {
    setSelectedValue(value);
    setIsOpen(false);
    setOrigin(false);
    setDouble(false);
    setLeftPizza("");
    setRightPizza("");
    setMaxTopping(0);
    setSecondPizza(false);
    const updatedToppingData = reactToppingData.map((item: any) => ({
      ...item,
      nums: 0
    }));
    const updatedToppingCheeseData = reactToppingCheeseData.map(
      (item: any) => ({
        ...item,
        nums: 0
      })
    );
    const updatedToppingAfterData = reactToppingAfterData.map((item: any) => ({
      ...item,
      nums: 0
    }));

    setReactToppingData(updatedToppingData);
    setReactToppingCheeseData(updatedToppingCheeseData);
    setReactToppingAfterData(updatedToppingAfterData);
    if (index === 9999) {
      setSelectedValue2("두번째 피자");
      setFirstPizza(false);
      setQuantity(0);
    } else if (index === 0) {
      setOrigin(true);
      setFirstPizza(true);
    } else if (index === 1) {
      setDouble(true);
      setFirstPizza(true);
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
    setMaxTopping(0);
    setClickedIndex(index);
    const updatedToppingData = reactToppingData.map((item: any) => ({
      ...item,
      nums: 0
    }));
    const updatedToppingCheeseData = reactToppingCheeseData.map(
      (item: any) => ({
        ...item,
        nums: 0
      })
    );
    const updatedToppingAfterData = reactToppingAfterData.map((item: any) => ({
      ...item,
      nums: 0
    }));

    setReactToppingData(updatedToppingData);
    setReactToppingCheeseData(updatedToppingCheeseData);
    setReactToppingAfterData(updatedToppingAfterData);
    if (index === 9998) {
      setSecondPizza(false);
    } else if (selectedValue === "뉴욕 오리진" && index !== 9998) {
      setSecondPizza(true);
      setQuantity(1);
    } else if (selectedValue === "뉴욕 오리진 더블치즈엣지" && index !== 9998) {
      setSecondPizza(true);
      setQuantity(1);
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
            <div className="dou"></div>
            <p className="gray">
              *모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.
            </p>
          </div>

          <div className="select_box">
            <div className="my_title">
              <h2>
                나만의 DIY 피자를 합리적인 가격에!
                <br />
                마이키친 전용 할인쿠폰에
                <br /> 추가 토핑까지 모두 할인!
              </h2>
              <button className="my_info">
                마이키친 영양성분·원산지·알레르기 유발성분 정보{" "}
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <div className="war_topping orange">
                ⓘ마이키친 이용 시 유의사항
              </div>
            </div>

            <div className="select_size">
              <h4>사이즈 선택</h4>
              <div className="flex_sb">
                <button
                  onClick={() => onSizeClicked("L")}
                  className={`btn-type4 ${btnClickedtomato ? "act" : ""}`}
                >
                  L
                </button>
                <button
                  onClick={() => onSizeClicked("M")}
                  className={`btn-type4 ${btnClickedboolgogi ? "act" : ""}`}
                >
                  M
                </button>
              </div>
            </div>

            <div className="select_dou">
              <div className="flex_sb">
                <h4>도우 선택</h4>

                <p className="orange">ⓘ도우/엣지의 특징</p>
              </div>

              <div className="my_dou">
                <div>
                  <input type="radio" id="origin" name="dou" value="origin" />
                  <label htmlFor="origin">
                    오리지널 도우 (더블 치즈엣지)
                    <span>+5,000원</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="napoly"
                    name="dou"
                    value="napoly"
                    checked
                  />
                  <label htmlFor="napoly">오리지널 도우 (기본)</label>
                </div>
                <div>
                  <input type="radio" id="thin" name="dou" value="thin" />
                  <label htmlFor="thin">나폴리 도우</label>
                </div>
                <div>
                  <input type="radio" id="super" name="dou" value="super" />
                  <label htmlFor="super">씬 도우</label>
                </div>
              </div>
            </div>

            <div className="select_size">
              <h4>소스 선택</h4>
              <div className="flex_sb">
                <button
                  onClick={() => onSorceClicked("tomato")}
                  className={`btn-type4 ${btnClickedL ? "act" : ""}`}
                >
                  토마토 소스
                </button>
                <button
                  onClick={() => onSorceClicked("boolgogi")}
                  className={`btn-type4 ${btnClickedM ? "act" : ""}`}
                >
                  불고기 소스
                </button>
              </div>
            </div>

            <div className="select_topping">
              <div className="war_topping orange">ⓘ토핑 알레르기 유발성분</div>
              <div className="my_topping">
                <div>
                  <p>*토핑추가는 피자 한판 당 7개까지 추가 가능</p>
                  <p>
                    *기본으로 모차렐라 치즈가 추가됩니다.(슈퍼슈프림 피자 정량
                    기준)
                  </p>
                  <div>
                    <ul className="tabs">
                      <li
                        className={`tabs_main ${tabsIndex === 0 ? "act" : ""}`}
                        onClick={() => tabsClick(0)}
                      >
                        메인
                      </li>
                      <li
                        className={`tabs_cheeese ${
                          tabsIndex === 1 ? "act" : ""
                        }`}
                        onClick={() => tabsClick(1)}
                      >
                        치즈
                      </li>
                      <li
                        className={`tabs_after ${tabsIndex === 2 ? "act" : ""}`}
                        onClick={() => tabsClick(2)}
                      >
                        애프터
                      </li>
                    </ul>

                    {tabsIndex === 0 && (
                      <div>
                        {reactToppingData.map((item: any) => (
                          <div className="flex_sb" key={item.id}>
                            <div className="flex">
                              <img src={item.img} alt="" />
                              <div className="txt_box">
                                <p>{item.name}</p>
                                <p>{item.price.toLocaleString()}</p>
                              </div>
                            </div>
                            <div className="btn_box">
                              <button
                                onClick={() => {
                                  if (maxTopping < 7) {
                                    const updatedNums = item.nums + 1;
                                    const updatedToppingData = [
                                      ...reactToppingData
                                    ];
                                    const updatedItem = {
                                      ...item,
                                      nums: updatedNums
                                    };
                                    const itemIndex =
                                      updatedToppingData.findIndex(
                                        (dataItem) => dataItem.id === item.id
                                      );
                                    updatedToppingData[itemIndex] = updatedItem;

                                    setReactToppingData(updatedToppingData);
                                    setMaxTopping(maxTopping + 1);
                                  } else if (maxTopping >= 7) {
                                    alert("토핑의 최대 갯수는 7개 입니다.");
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                              <button>{item.nums}</button>
                              <button
                                onClick={() => {
                                  if (maxTopping > 0) {
                                    const updatedNums = item.nums - 1;
                                    const updatedToppingData = [
                                      ...reactToppingData
                                    ];
                                    const updatedItem = {
                                      ...item,
                                      nums: updatedNums
                                    };
                                    const itemIndex =
                                      updatedToppingData.findIndex(
                                        (dataItem) => dataItem.id === item.id
                                      );
                                    updatedToppingData[itemIndex] = updatedItem;

                                    setReactToppingData(updatedToppingData);
                                    setMaxTopping(maxTopping - 1);
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {tabsIndex === 1 && (
                      <div>
                        {reactToppingCheeseData.map((item: any) => (
                          <div className="flex_sb" key={item.id}>
                            <div className="flex">
                              <img src={item.img} alt="" />
                              <div className="txt_box">
                                <p>{item.name}</p>
                                <p>{item.price.toLocaleString()}</p>
                              </div>
                            </div>
                            <div className="btn_box">
                              <button
                                onClick={() => {
                                  if (maxTopping < 7) {
                                    const updatedNums = item.nums + 1;
                                    const updatedToppingCheeseData = [
                                      ...reactToppingCheeseData
                                    ];
                                    const updatedItem = {
                                      ...item,
                                      nums: updatedNums
                                    };
                                    const itemIndex =
                                      updatedToppingCheeseData.findIndex(
                                        (dataItem) => dataItem.id === item.id
                                      );
                                    updatedToppingCheeseData[itemIndex] =
                                      updatedItem;

                                    setReactToppingCheeseData(
                                      updatedToppingCheeseData
                                    );
                                    setMaxTopping(maxTopping + 1);
                                  } else if (maxTopping >= 7) {
                                    alert("토핑의 최대 갯수는 7개 입니다.");
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                              <button>{item.nums}</button>
                              <button
                                onClick={() => {
                                  if (maxTopping > 0) {
                                    const updatedNums = item.nums - 1;
                                    const updatedToppingCheeseData = [
                                      ...reactToppingCheeseData
                                    ];
                                    const updatedItem = {
                                      ...item,
                                      nums: updatedNums
                                    };
                                    const itemIndex =
                                      updatedToppingCheeseData.findIndex(
                                        (dataItem) => dataItem.id === item.id
                                      );
                                    updatedToppingCheeseData[itemIndex] =
                                      updatedItem;

                                    setReactToppingCheeseData(
                                      updatedToppingCheeseData
                                    );
                                    setMaxTopping(maxTopping - 1);
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {tabsIndex === 2 && (
                      <div>
                        {reactToppingAfterData.map((item: any) => (
                          <div className="flex_sb" key={item.id}>
                            <div className="flex">
                              <img src={item.img} alt="" />
                              <div className="txt_box">
                                <p>{item.name}</p>
                                <p>{item.price.toLocaleString()}</p>
                              </div>
                            </div>
                            <div className="btn_box">
                              <button
                                onClick={() => {
                                  if (maxTopping < 7) {
                                    const updatedNums = item.nums + 1;
                                    const updatedToppingAfterData = [
                                      ...reactToppingAfterData
                                    ];
                                    const updatedItem = {
                                      ...item,
                                      nums: updatedNums
                                    };
                                    const itemIndex =
                                      updatedToppingAfterData.findIndex(
                                        (dataItem) => dataItem.id === item.id
                                      );
                                    updatedToppingAfterData[itemIndex] =
                                      updatedItem;

                                    setReactToppingAfterData(
                                      updatedToppingAfterData
                                    );
                                    setMaxTopping(maxTopping + 1);
                                  } else if (maxTopping >= 7) {
                                    alert("토핑의 최대 갯수는 7개 입니다.");
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                              <button>{item.nums}</button>
                              <button
                                onClick={() => {
                                  if (maxTopping > 0) {
                                    const updatedNums = item.nums - 1;
                                    const updatedToppingAfterData = [
                                      ...reactToppingAfterData
                                    ];
                                    const updatedItem = {
                                      ...item,
                                      nums: updatedNums
                                    };
                                    const itemIndex =
                                      updatedToppingAfterData.findIndex(
                                        (dataItem) => dataItem.id === item.id
                                      );
                                    updatedToppingAfterData[itemIndex] =
                                      updatedItem;

                                    setReactToppingAfterData(
                                      updatedToppingAfterData
                                    );
                                    setMaxTopping(maxTopping - 1);
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="select_number">
              <h4>수량 선택</h4>
              <div className="btn_box">
                <button
                  onClick={() => {
                    if (quantity <= 0) {
                      return;
                    }
                    setQuantity(quantity - 1);
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <button>{quantity}</button>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>

            <div className="select_side">
              <h4>사이드디시</h4>
              <div>
                <ul className="tabs">
                  <li
                    className={`tabs_special ${
                      tabsSideIndex === 0 ? "act" : ""
                    }`}
                    onClick={() => tabsSideClick(0)}
                  >
                    특가
                  </li>
                  <li
                    className={`tabs_basic ${tabsSideIndex === 1 ? "act" : ""}`}
                    onClick={() => tabsSideClick(1)}
                  >
                    일반
                  </li>
                </ul>
                {tabsSideIndex === 0 && (
                  <div>
                    {reactSpecialData.map((item: any) => (
                      <div className="flex_sb" key={item.id}>
                        <div className="flex">
                          <img src={item.img} alt="" />
                          <div className="txt_box">
                            <p>{item.name}</p>
                            <div className="flex">
                              <p>{item.maxPrice.toLocaleString()}</p>
                              <p>{item.price.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                        <div className="btn_box">
                          <button
                            onClick={() => {
                              const updatedNums = item.nums + 1;
                              const updatedSpecialData = [...reactSpecialData];
                              const updatedItem = {
                                ...item,
                                nums: updatedNums
                              };
                              const itemIndex = updatedSpecialData.findIndex(
                                (dataItem) => dataItem.id === item.id
                              );
                              updatedSpecialData[itemIndex] = updatedItem;

                              setReactSpecialData(updatedSpecialData);
                            }}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <button>{item.nums}</button>
                          <button
                            onClick={() => {
                              if (maxTopping > 0) {
                                const updatedNums = item.nums - 1;
                                const updatedSpecialData = [
                                  ...reactSpecialData
                                ];
                                const updatedItem = {
                                  ...item,
                                  nums: updatedNums
                                };
                                const itemIndex = updatedSpecialData.findIndex(
                                  (dataItem) => dataItem.id === item.id
                                );
                                updatedSpecialData[itemIndex] = updatedItem;

                                setReactSpecialData(updatedSpecialData);
                              }
                            }}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {tabsSideIndex === 1 && (
                  <div>
                    {reactBasicData.map((item: any) => (
                      <div className="flex_sb" key={item.id}>
                        <div className="flex">
                          <img src={item.img} alt="" />
                          <div className="txt_box">
                            <p>{item.name}</p>
                            <p>{item.price.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="btn_box">
                          <button
                            onClick={() => {
                              const updatedNums = item.nums + 1;
                              const updatedBasicData = [...reactBasicData];
                              const updatedItem = {
                                ...item,
                                nums: updatedNums
                              };
                              const itemIndex = updatedBasicData.findIndex(
                                (dataItem) => dataItem.id === item.id
                              );
                              updatedBasicData[itemIndex] = updatedItem;

                              setReactBasicData(updatedBasicData);
                            }}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <button>{item.nums}</button>
                          <button
                            onClick={() => {
                              const updatedNums = item.nums - 1;
                              const updatedBasicData = [...reactBasicData];
                              const updatedItem = {
                                ...item,
                                nums: updatedNums
                              };
                              const itemIndex = updatedBasicData.findIndex(
                                (dataItem) => dataItem.id === item.id
                              );
                              updatedBasicData[itemIndex] = updatedItem;

                              setReactBasicData(updatedBasicData);
                            }}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="drink_ect">
              <h4>음료&기타</h4>

              <div>
                {reactSpecialData.map((item: any) => (
                  <div className="flex_sb" key={item.id}>
                    <div className="flex">
                      <img src={item.img} alt="" />
                      <div className="txt_box">
                        <p>{item.name}</p>
                        <div className="flex">
                          <p>{item.maxPrice.toLocaleString()}</p>
                          <p>{item.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn_box">
                      <button
                        onClick={() => {
                          const updatedNums = item.nums + 1;
                          const updatedSpecialData = [...reactSpecialData];
                          const updatedItem = {
                            ...item,
                            nums: updatedNums
                          };
                          const itemIndex = updatedSpecialData.findIndex(
                            (dataItem) => dataItem.id === item.id
                          );
                          updatedSpecialData[itemIndex] = updatedItem;

                          setReactSpecialData(updatedSpecialData);
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                      <button>{item.nums}</button>
                      <button
                        onClick={() => {
                          if (maxTopping > 0) {
                            const updatedNums = item.nums - 1;
                            const updatedSpecialData = [...reactSpecialData];
                            const updatedItem = {
                              ...item,
                              nums: updatedNums
                            };
                            const itemIndex = updatedSpecialData.findIndex(
                              (dataItem) => dataItem.id === item.id
                            );
                            updatedSpecialData[itemIndex] = updatedItem;

                            setReactSpecialData(updatedSpecialData);
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mymenu;
function setToppingData(
  updatedToppingData: {
    id: number;
    img: string;
    name: string;
    price: number;
    nums: number;
  }[]
) {
  throw new Error("Function not implemented.");
}
