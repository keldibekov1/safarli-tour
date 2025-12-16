import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  prop?: any;
}

const ScrollToTop = ({ prop }: ScrollToTopProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, prop]);

  return null;
};

export default ScrollToTop;
