import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RoutesPath } from "../../types/layout";
import "./nav.scss";

const LINKS = [
  {
    path: RoutesPath.HOME,
    name: "Home",
  },
  {
    path: RoutesPath.LEVEL_CHECK,
    name: "LevelCheck",
  },
  {
    path: RoutesPath.CONTACTS,
    name: "Contacts",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isMenuOpen ? " active" : ""}`}>
      <div className="nav-header">
        <div className="nav-logo">
          <NavLink className="nav-logo-link" to="/">
            Kotovich
          </NavLink>
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
          {LINKS.map((link) => {
            return (
              <li className="nav-menu-list-item" key={link.path}>
                <NavLink
                  className="nav-menu-list-item-link link-hover"
                  to={link.path}
                  onClick={handleMenuOpen}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="nav-menu-language">
          <button className="link-hover">EN</button>
          <button className="link-hover">UA</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
