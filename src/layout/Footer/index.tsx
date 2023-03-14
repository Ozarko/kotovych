import React from "react";
import { useTranslation } from "../../context/useTranslation";
import "./footer.scss";

const year = new Date().getFullYear();

export const Footer = () => {
  const {
    schema: { footer },
  } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/" target="_blank">
          {footer.copyRight}
        </a>
      </div>
      <div className="footer-title">
        <h2>{footer.title}</h2>
      </div>
      <div className="footer-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nazar-ozarko-90b542188/"
        >
          {footer.madeBy}
        </a>
      </div>
    </footer>
  );
};
