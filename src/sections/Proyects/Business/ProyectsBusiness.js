import { useEffect, useState } from "react";
import ProjectsRepository from "../../../repositories/ProjectsRepository";

const ProyectBusiness = () => {
  const [position, setPosition] = useState(0);
  const [numProyects, setNumProyects] = useState(0);
  const [proyect, setProyect] = useState([]);
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectsRepository.getProjectsByLanguage({
          english: true,
        });
        setProyect(response[0]);
        setProyects(response);
        setNumProyects(response.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handledClickLeft = () => {
    if (position - 1 >= 0) {
      setPosition(position - 1);
      setProyect(proyects[position - 1]);
    }
  };

  const handledClickRight = () => {
    if (position + 1 < numProyects) {
      setPosition(position + 1);
      setProyect(proyects[position + 1]);
    }
  };

  return { proyect, handledClickLeft, handledClickRight };
};

export default ProyectBusiness;
