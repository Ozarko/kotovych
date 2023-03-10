import "./footer.scss";

const date = new Date();

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <p>© {date.getFullYear()}</p>
        <a href="/" target="_blank">
          Kotovich
        </a>
      </div>
      <div className="footer-social">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nazar-ozarko-90b542188/"
        >
          Facebook
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nazar-ozarko-90b542188/"
        >
          Instagram
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nazar-ozarko-90b542188/"
        >
          LinkedIn
        </a>
      </div>
      <div className="footer-links">
        <p>Made By</p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nazar-ozarko-90b542188/"
        >
          Ozarko
        </a>
      </div>
    </footer>
  );
};
