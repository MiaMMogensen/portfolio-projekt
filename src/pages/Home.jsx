import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")?.[0];

    if (location.state?.section) {
      // Hvis der er section i state → scroll til den
      const section = document.getElementById(location.state.section);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      // Ryd state bagefter så det ikke hænger fast
      navigate(location.pathname, { replace: true, state: null });
    } else if (nav?.type === "reload") {
      // Kun hvis det er reload → scroll til toppen
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
