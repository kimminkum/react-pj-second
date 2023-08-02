import React, { useEffect, useState, useRef } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import styled from "styled-components";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Header from "./routes/Header";
import Footer from "./routes/Footer";
import Main from "./routes/Main";
import Menu from "./routes/Menu";

import eventModal from "./img/event.png";

const App: React.FC = () => {
  const [modalUp, setModalUp] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPopup, setisPopup] = useState<boolean>(true);
  const [plusPopup, setPlusPopup] = useState<boolean>(false);

  const offToggle = () => {
    setisPopup(false);
  };

  const plusToggle = () => {
    setPlusPopup(!plusPopup);
  };

  const offModal = () => {
    setModalUp(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`App ${isPopup ? "popupon" : ""}`}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          {!isPopup && <Header plusToggle={plusToggle} plusPopup={plusPopup} />}
          {/* windowWidth={windowWidth}  */}

          {!isPopup && (
            <Routes>
              <Route
                path="/"
                element={<Main windowWidth={windowWidth} />}
              ></Route>
              <Route path="/menu/*" element={<Menu />}></Route>
              {/* <Route
                path="/about/*"
                element={<About windowWidth={windowWidth} />}
              ></Route>
              <Route
                path="/business/*"
                element={<Business windowWidth={windowWidth} />}
              ></Route>
              <Route
                path="/pr"
                element={<Pr windowWidth={windowWidth} />}
              ></Route>
              <Route
                path="/careers/*"
                element={<Careers windowWidth={windowWidth} />}
              ></Route>
              <Route
                path="/contact"
                element={<Contact windowWidth={windowWidth} />}
              ></Route> */}
            </Routes>
          )}

          {isPopup && (
            <div className="modal">
              <div>
                <img
                  src="https://cdn.dominos.co.kr/renewal2018/w/img/img_gate_230629.jpg"
                  alt=""
                />
              </div>

              <div>
                <div onClick={offToggle}></div>

                <div
                  onClick={() => {
                    alert("준비중입니다.");
                  }}
                ></div>

                {/* <div>
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/6r_Ujf1q07k?mute=1"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div> */}
              </div>
            </div>
          )}

          {!isPopup && <Footer />}
        </BrowserRouter>
      </div>

      {modalUp && (
        <div className="modals">
          <img src={eventModal} alt="" />
          <span className="xBtn" onClick={offModal}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      )}
    </>
  );
};

export default App;
