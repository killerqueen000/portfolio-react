import React from "react";
import { useDarkMode } from "./dark-light";

function Header() {
  const { theme, toggleTheme, checked } = useDarkMode();
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <a href="#home">Home </a>
          </li>
          <span>//</span>
          <li>
            <a href="#expertise"> Expertise </a>
          </li>
          <span>//</span>
          <li>
            <a href="#project"> Project </a>
          </li>
          <span>//</span>
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </nav>
      <button className="change-mode" onClick={toggleTheme}>
        {theme === "dark" ? (
          <img
            src="/starry-night.png"
            alt="night mode"
            className="icon default"
          />
        ) : (
          <img src="/sun.png" alt="light mode" className="icon hover" />
        )}
      </button>
    </header>
  );
}

export default Header;
