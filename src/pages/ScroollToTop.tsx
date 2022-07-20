import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//TODO move to the utils

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
