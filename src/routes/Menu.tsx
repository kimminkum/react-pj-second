import React, { useState } from "react";
import { Link } from "react-router-dom";

import Pizza from "../components/Pizza";
import Oncemenu from "../components/Oncemenu";
import Halfmenu from "../components/Halfmenu";
import Sidemenu from "../components/Sidemenu";
import Bestmenu from "../components/Bestmenu";
import Mymenu from "../components/Mymenu";
import Drinkmenu from "../components/Drinkmenu";

import "../css/Menu.css";

const Menu: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("pizza");
  const [urlName, setUrlName] = useState("피자");

  const handleTabClick = (tab: string, urls: string) => {
    setSelectedTab(tab);
    setUrlName(urls);
  };

  let content;
  if (selectedTab === "pizza") {
    content = <Pizza />;
  } else if (selectedTab === "once_menu") {
    content = <Oncemenu />;
  } else if (selectedTab === "harf_half") {
    content = <Halfmenu />;
  } else if (selectedTab === "side_dish") {
    content = <Sidemenu />;
  } else if (selectedTab === "best_set") {
    content = <Bestmenu />;
  } else if (selectedTab === "mymenu") {
    content = <Mymenu />;
  } else if (selectedTab === "drink") {
    content = <Drinkmenu />;
  }

  return (
    <div className="menuPage">
      <div className="menu_box">
        <div className="inner_box">
          <div className="menu_title flex_sb">
            <p className="title">메뉴</p>

            <p>
              홈 {">"} 메뉴 {">"} {urlName}
            </p>
          </div>

          <div className="menu_tab">
            <ul className="menuList flex">
              <li className={selectedTab === "pizza" ? "tab_act" : ""}>
                <Link to="#" onClick={() => handleTabClick("pizza", "피자")}>
                  피자
                </Link>
              </li>
              <li className={selectedTab === "once_menu" ? "tab_act" : ""}>
                <Link
                  to="#"
                  onClick={() => handleTabClick("once_menu", "1인 피자")}
                >
                  1인 피자
                </Link>
              </li>
              <li className={selectedTab === "harf_half" ? "tab_act" : ""}>
                <Link
                  to="#"
                  onClick={() => handleTabClick("harf_half", "하프앤하프")}
                >
                  하프앤하프
                </Link>
              </li>
              <li className={selectedTab === "side_dish" ? "tab_act" : ""}>
                <Link
                  to="#"
                  onClick={() => handleTabClick("side_dish", "사이드디쉬")}
                >
                  사이드디쉬
                </Link>
              </li>
              <li className={selectedTab === "best_set" ? "tab_act" : ""}>
                <Link
                  to="#"
                  onClick={() => handleTabClick("best_set", "인기세트메뉴")}
                >
                  인기세트메뉴
                </Link>
              </li>
              <li className={selectedTab === "mykitchin" ? "tab_act" : ""}>
                <Link
                  to="#"
                  onClick={() => handleTabClick("mymenu", "마이키친")}
                >
                  마이키친
                </Link>
              </li>
              <li className={selectedTab === "drink_ect" ? "tab_act" : ""}>
                <Link
                  to="#"
                  onClick={() => handleTabClick("drink", "음료&기타")}
                >
                  음료&기타
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {content}
    </div>
  );
};

export default Menu;
