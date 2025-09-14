import { useState, useEffect } from "react";
import { Link } from "react-router";
import logo from "/img/logo.png";
import mail from "/img/mail.png";
import github from "/img/github.png";
import linkedin from "/img/linkedin.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/" state={{ section: "home" }}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav className="nav-center">
          <ul>
            <li>
              <Link to="/" state={{ section: "about" }}>
                Om mig
              </Link>
            </li>
            <li>
              <Link to="/" state={{ section: "projects" }}>
                Projekter
              </Link>
            </li>
            <li>
              <Link to="/" state={{ section: "contact" }}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        <div className="social-media-icons">
          <img src={mail} alt="mail icon" />
          <img src={github} alt="github icon" />
          <img src={linkedin} alt="linkedin icon" />
        </div>

        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={`nav-overlay ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              state={{ section: "about" }}
              onClick={() => setMenuOpen(false)}
            >
              Om mig
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ section: "projects" }}
              onClick={() => setMenuOpen(false)}
            >
              Projekter
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ section: "contact" }}
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
