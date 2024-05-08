import React, { useEffect, useState } from "react";
import "./Scroll.css";

const ScrollUp = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (scrollPosition <= 0) {
    return null; // Render nothing when scroll position is less than or equal to 0
  }

  return (
    <button className="scrollUp" onClick={scrollToTop}>
      <i
        style={{ color: "var(--body_background)" }}
        className="uil uil-arrow-up scrollUp__icon"
      ></i>
    </button>
  );
};

export default ScrollUp;
