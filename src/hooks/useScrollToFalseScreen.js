import { useEffect } from "react";

const useScrollToFalseScreen = () => {
  useEffect(() => {
    const falseScreenElement = document.querySelector(".falseScreen");
    if (falseScreenElement) {
      falseScreenElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
};

export default useScrollToFalseScreen;
