import React, { useState, useEffect } from "react";
import drinkData2 from "../data/drinkData2";

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Drinkmenu: React.FC = () => {
  const [drinkItems, setDrinkItems] = useState([...drinkData2]);

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때만 초기값으로 설정
    if (drinkItems.length === 0) {
      setDrinkItems([...drinkData2]);
    }
  }, []); // 빈 배열을 넣어서 한 번만 실행되도록 함

  return (
    <div className="product">
      <div className="inner_box">
        <article>
          <div className="grid4">
            {drinkItems.map((item: any) => (
              <div className="pro_menu" key={item.id}>
                <div className="img_box">
                  <img src={item.img} alt="" />
                </div>

                <div className="txt_box">
                  <div className="pro_name">{item.name}</div>
                  <div className="pro_price flex">
                    <div className={`${item.price === "" ? "" : "price"}`}>
                      {item.price}
                    </div>
                  </div>

                  <div className="drink_order flex_sb">
                    <div className="flex_sb">
                      <button
                        onClick={() =>
                          setDrinkItems((prevItems) =>
                            prevItems.map((prevItem) =>
                              prevItem.id === item.id && prevItem.nums > 0
                                ? { ...prevItem, nums: prevItem.nums - 1 }
                                : prevItem
                            )
                          )
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <button>{item.nums}</button>
                      <button
                        onClick={() =>
                          setDrinkItems((prevItems) =>
                            prevItems.map((prevItem) =>
                              prevItem.id === item.id
                                ? { ...prevItem, nums: prevItem.nums + 1 }
                                : prevItem
                            )
                          )
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div>
                      <button>주문</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Drinkmenu;
