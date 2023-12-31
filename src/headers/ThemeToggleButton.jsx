import React from "react";
import "./Toogle.css";

const ThemeToggleButton = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("class", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("class", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <label class="switch" onChange={toggleTheme}>
      <input type="checkbox" />
      <span class="slider">
        <svg
          class="slider-icon"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
        >
          <path fill="none" d="m4 16.5 8 8 16-16"></path>
        </svg>
      </span>
    </label>
  );
};

export default ThemeToggleButton;
