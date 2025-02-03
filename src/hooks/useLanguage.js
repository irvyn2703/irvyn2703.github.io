import { useState } from "react";

const useLanguage = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  };

  return {
    isEnglish,
    toggleLanguage,
  };
};

export default useLanguage;
