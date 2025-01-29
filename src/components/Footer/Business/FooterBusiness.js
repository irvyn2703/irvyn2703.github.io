const FooterBusiness = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copiado al portapapeles`);
  };

  return { handleCopy };
};

export default FooterBusiness;
