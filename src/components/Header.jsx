import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/img/logo.png";
import mail from "../assets/img/mail.png";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/projects/")) {
      setActiveSection("projects");
    }
  }, [location]);

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
              <Link
                to="/"
                state={{ section: "about" }}
                className={activeSection === "about" ? "active" : ""}
              >
                Om mig
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ section: "projects" }}
                className={activeSection === "projects" ? "active" : ""}
              >
                Projekter
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ section: "contact" }}
                className={activeSection === "contact" ? "active" : ""}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        <div className="social-media-icons">
          <a href="mailto:miamogensen2@gmail.com">
            <img src={mail} alt="mail icon" />
          </a>

          <a
            href="https://github.com/MiaMMogensen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/mia-mogensen-5815b4325/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin icon" />
          </a>
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
