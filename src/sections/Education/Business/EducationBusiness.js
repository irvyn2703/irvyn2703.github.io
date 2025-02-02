import { useEffect, useState } from "react";
import EducationRepository from "../../../repositories/EducationRepository";

const EducationBusiness = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EducationRepository.getEducationByLanguage({
          english: false,
        });
        console.log({ response });
        setEducation(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { education };
};

export default EducationBusiness;
