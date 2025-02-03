import { useEffect, useState } from "react";
import ProjectsRepository from "../../../repositories/ProjectsRepository";

const ProjectsBusiness = ({ english }) => {
  const [position, setPosition] = useState(0);
  const [numProjects, setNumProjects] = useState(0);
  const [project, setProject] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectsRepository.getProjectsByLanguage({
          english,
        });
        setProject(response[0]);
        setProjects(response);
        setNumProjects(response.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handledClickLeft = () => {
    if (position - 1 >= 0) {
      setPosition(position - 1);
      setProject(projects[position - 1]);
    }
  };

  const handledClickRight = () => {
    if (position + 1 < numProjects) {
      setPosition(position + 1);
      setProject(projects[position + 1]);
    }
  };

  return { project, handledClickLeft, handledClickRight };
};

export default ProjectsBusiness;
