import { useEffect, useState } from "react";

const TreesBusiness = () => {
  const numTrees = 15;
  const [positionTrees, setPositionTrees] = useState([]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 98);
  };

  useEffect(() => {
    let arrayTemp = new Array(numTrees);
    for (let i = 0; i < numTrees; i++) {
      arrayTemp[i] = getRandomNumber();
    }

    setPositionTrees(arrayTemp);
  }, []);
  return {
    positionTrees,
  };
};

export default TreesBusiness;
