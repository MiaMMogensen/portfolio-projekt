import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router";
import mail from "../assets/img/mail.png";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";

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
          <img src={logo} alt="logo" />
        </div>

        <nav className="nav-center">
          <ul>
            <li>
              <NavLink to="/about">Om mig</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projekter</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
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
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              Om mig
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
              Projekter
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
