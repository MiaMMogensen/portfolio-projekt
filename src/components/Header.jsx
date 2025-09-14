import { useState, useEffect } from "react";
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
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <nav className="nav-center">
          <ul>
            <li>
              <a href="#about">Om mig</a>
            </li>
            <li>
              <a href="#projects">Projekter</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
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
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Om mig
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projekter
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
