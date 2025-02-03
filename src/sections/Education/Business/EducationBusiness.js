import { useEffect, useState } from "react";
import EducationRepository from "../../../repositories/EducationRepository";

const EducationBusiness = ({ english }) => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EducationRepository.getEducationByLanguage({
          english,
        });
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
