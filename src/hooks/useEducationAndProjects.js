import { useEffect, useState } from "react";

const useEducationAndProjects = () => {
  const apiUrl =
    "https://x8ki-letl-twmt.n7.xano.io/api:ybZg4AS_/portafolio_7ebf031092264b5a9c89d65eee775662";
  const [education, setEducation] = useState(null);
  const [proyects, setProyects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getEducationAndProyects = (data) => {
    setEducation(data.filter((item) => item.Tipo === "Estudio"));
    setProyects(data.filter((item) => item.Tipo !== "Estudio"));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        getEducationAndProyects(data);
        setIsLoading(false);
      } catch (error) {
        alert("Error al cargar la información");
      }
    };

    fetchData();
  }, []);

  return { education, proyects, isLoading };
};

export default useEducationAndProjects;
