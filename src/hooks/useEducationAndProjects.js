import { useEffect, useState } from "react";

const useEducationAndProjects = () => {
  const apiUrl =
    "https://x8ki-letl-twmt.n7.xano.io/api:ybZg4AS_/portafolio_7ebf031092264b5a9c89d65eee775662";
  const [education, setEducation] = useState(null);
  const [proyects, setProyects] = useState(null);

  const getEducationAndProyects = ({ data }) => {
    setEducation(data.filter((item) => item.Tipo === "Estudio"));
    setProyects(data.filter((item) => item.Tipo !== "Estudio"));
  };

  useEffect(() => {
    try {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          getEducationAndProyects({ data });
        });
    } catch (error) {
      alert("Error al cargar la información");
    }
  }, []);

  return { education, proyects };
};

export default useEducationAndProjects;
