import React from "react";
import Profil from "./FotoProfil";
import "./Nav.css";

function Nav() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Profil />
          <p data-text="𝕊𝕥𝕖𝕡𝕒𝕟" className="navbar-text">
            𝕊𝕥𝕖𝕡𝕒𝕟
          </p>
        </div>

        <div className="navbar-wrap">
          <ul className="navbar-menu">
            
            <li className="navbar-btn">
              <a className="ahrf" href="#home">Home</a>
            </li>
            <li className="navbar-btn">
              <a className="ahrf" href="#about">About</a>
            </li>
            <li className="navbar-btn">
              <a className="ahrf" href="#languages">Skills</a>
            </li>
            <li className="navbar-btn">
              <a className="ahrf" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;