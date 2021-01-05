import React, { useState } from "react";
import PopularUsers from "./components/PopularUsers";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";
import { FaArrowCircleUp } from "react-icons/fa";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <BrowserRouter>
      <div className="App">
        <div
          className="app-container"
          style={{ backgroundImage: "url(/img/frame.png)" }}
        >
          <FaArrowCircleUp
            className="scrollTop"
            onClick={scrollTop}
            style={{ height: 40, display: showScroll ? "flex" : "none" }}
          />
          <SearchBar />
          <Route exact path="/" component={PopularUsers} />
          <Route path="/:username" component={UserInfo} />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
