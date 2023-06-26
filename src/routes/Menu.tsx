import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Company from "../components/Company";
// import History from "../components/History";
// import Si from "../components/Si";

const Menu: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("company");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  let content;
  if (selectedTab === "company") {
    // content = <Company windowWidth={windowWidth} />;
  } else if (selectedTab === "history") {
    // content = <History windowWidth={windowWidth} />;
  } else if (selectedTab === "si") {
    // content = <Si windowWidth={windowWidth} />;
  }

  return (
    <div>
      <div className="about_box">
        <div className="about_txt">
          <h1>About Us</h1>
        </div>

        <div className="about_tab">
          {/* <ul className="aboutList">
            <li>
              <Link to="#" onClick={() => handleTabClick("company")}>
                회사소개
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleTabClick("history")}>
                역사
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleTabClick("si")}>
                SI
              </Link>
            </li>
          </ul> */}
        </div>
        <div className="about_bg"></div>
      </div>

      {content}
    </div>
  );
};

export default Menu;
