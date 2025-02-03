import ButtonIcon from "../../../components/ButtonIcon/UI/ButtonIcon";
import Cards from "../../../components/Cards/UI/Cards";
import ProjectsBusiness from "../Business/ProjectsBusiness";
import styles from "../Style/Projects.module.css";

const Projects = ({ english }) => {
  const { project, handledClickLeft, handledClickRight } = ProjectsBusiness({
    english,
  });
  return (
    <section className={styles.projects} id="projects">
      <h2>Proyectos</h2>
      <div className={styles.container}>
        <Cards Type={project} />
        <div className={styles.containerButtons}>
          <ButtonIcon
            icon="fa-solid fa-chevron-left"
            handlendClick={handledClickLeft}
          />
          <ButtonIcon
            icon="fa-solid fa-chevron-right"
            handlendClick={handledClickRight}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
