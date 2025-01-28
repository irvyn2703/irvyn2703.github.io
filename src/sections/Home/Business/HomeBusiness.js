const HomeBusiness = () => {
  const data = [
    { icon: "fa-solid fa-location-dot", text: "Puebla, México." },
    { icon: "fa-solid fa-phone", text: "+52 2226691915" },
    { icon: "fa-brands fa-linkedin", text: "Irvyn Xicale Cabrera" },
    { icon: "fa-brands fa-square-github", text: "irvyn2703" },
    { icon: "fa-solid fa-envelope", text: "irvynxicale@hotmail.com" },
  ];

  const handleClicked = () => {
    window.open("/cvIrvynEspañol.pdf", "_blank");
  };

  return { data, handleClicked };
};

export default HomeBusiness;
