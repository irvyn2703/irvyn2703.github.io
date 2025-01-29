import { useEffect, useState } from "react";

const ProyectBusiness = ({ proyects }) => {
  const [position, setPosition] = useState(0);
  const [numProyects, setNumProyects] = useState(0);
  const [proyect, setProyect] = useState([]);

  useEffect(() => {
    if (proyects && proyects.length > 0) {
      setNumProyects(proyects.length);
      setProyect(proyects[position]);
    }
  }, [proyects, position]);

  const handledClickLeft = () => {
    if (position - 1 >= 0) {
      setPosition(position - 1);
    }
  };

  const handledClickRight = () => {
    if (position + 1 < numProyects) {
      setPosition(position + 1);
    }
  };

  return { proyect, handledClickLeft, handledClickRight };
};

export default ProyectBusiness;
