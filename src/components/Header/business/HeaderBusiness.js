import { useState } from "react";

const HeaderBusiness = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { isMenuOpen, toggleMenu };
};

export default HeaderBusiness;
