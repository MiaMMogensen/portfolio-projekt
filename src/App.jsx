import { Route, Routes, Navigate, useLocation } from "react-router";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
