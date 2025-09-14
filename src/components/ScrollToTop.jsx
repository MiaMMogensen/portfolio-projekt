import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Hvis vi er på en projektside
    if (pathname.startsWith("/projects")) {
      window.scrollTo({ top: 0, behavior: "auto" });
      // "auto" så den hopper direkte til top, uden smooth scroll
    }
  }, [pathname]);

  return null;
}
