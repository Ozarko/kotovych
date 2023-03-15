import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "../../context/useTranslation";
import { Languages } from "../../schemas/locale";
import "./nav.scss";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const {
    currentLanguage,
    setCurrentLanguage,
    schema: { navigation },
  } = useTranslation();

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (language: Languages) => {
    setCurrentLanguage(language);
    setIsMenuOpen(false);
  };

  return (
    <nav id="nav" className={`nav ${isMenuOpen ? " active" : ""}`}>
      <div className="nav-header">
        <div className="nav-logo">
          <a className="nav-logo-link" href="#nav">
            Kotovych
          </a>
        </div>
        <div className="nav-hamburger">
          <button
            className={`nav-hamburger-button${isMenuOpen ? " active" : ""}`}
            onClick={handleMenuOpen}
            aria-label="Main Menu"
          >
            <svg viewBox="0 0 100 100">
              <path
                className="nav-hamburger-button-line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path
                className="nav-hamburger-button-line line2"
                d="M 20,50 H 80"
              />
              <path
                className="nav-hamburger-button-line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`nav-menu ${isMenuOpen ? " active" : ""}`}>
        <ul className="nav-menu-list">
          {navigation.menu.map((item) => {
            return (
              <li className="nav-menu-list-item" key={item.id}>
                <a
                  className="nav-menu-list-item-link link-hover"
                  href={`${pathname === '/' ? item.id : `/kotovych/${item.id}`}`}
                  onClick={handleMenuOpen}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="nav-menu-language">
          {navigation.languages.map((item) => {
            return (
              <button
                key={item.id}
                className={`link-hover ${
                  currentLanguage === item.id && " active"
                }`}
                onClick={() => changeLanguage(item.id)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
