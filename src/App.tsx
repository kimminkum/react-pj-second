import React, { useEffect, useState, useRef } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import styled from "styled-components";
import "./App.css";

import Nav from "./components/Nav";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import Main from "./routes/Main";

const App: React.FC = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPopup, setisPopup] = useState(true);

  const handleToggle = () => {
    setisPopup(false);
  };

  // useEffect(() => {
  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };
  // window.addEventListener("resize", handleResize);
  // return () => {
  //   window.removeEventListener("resize", handleResize);
  // };
  // }, []);

  return (
    <>
      <div className={`App ${isPopup ? "popupon" : ""}`}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          {!isPopup && <Header />}
          {/* windowWidth={windowWidth}  */}

          {!isPopup && (
            <Routes>
              <Route path="/" element={<Main />}></Route>
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
                  src="https://cdn.dominos.co.kr/renewal2018/w/img/img_gate_230620.jpg"
                  alt=""
                />
              </div>

              <div>
                <div onClick={handleToggle}></div>

                <div>
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/6r_Ujf1q07k?mute=1"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isPopup && <Footer />}
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
