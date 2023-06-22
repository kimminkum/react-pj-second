import React, { useEffect, useState } from "react";
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
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <div className={`App ${isPopup ? "popupon" : ""}`}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          {/* windowWidth={windowWidth}  */}

          <Routes>
            <Route
              path="/"
              element={<Main isPopup={isPopup} offPopup={handleToggle} />}
            ></Route>
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

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
