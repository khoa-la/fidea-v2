import { useEffect, useState } from "react";

type Props = {
  screen: "sm" | "md" | "lg" | "xl" | "2xl";
};

export const useBreakpoint = (screen: string) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (screen == "sm" && window.innerWidth > 0 && window.innerWidth < 768) {
        setIsMatch(true);
      } else if (
        screen == "md" &&
        window.innerWidth > 768 &&
        window.innerWidth < 1024
      ) {
        setIsMatch(true);
      } else if (
        screen == "lg" &&
        window.innerWidth > 1024 &&
        window.innerWidth < 1280
      ) {
        setIsMatch(true);
      } else if (
        screen == "xl" &&
        window.innerWidth > 1280 &&
        window.innerWidth < 1536
      ) {
        setIsMatch(true);
      } else if (screen == "2xl" && window.innerWidth > 1536) {
        setIsMatch(true);
      } else {
        setIsMatch(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMatch;
};
