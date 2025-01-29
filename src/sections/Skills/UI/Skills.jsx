import SkillComponent from "../../../components/SkillComponent/UI/SkillComponent";
import SkillsBusiness from "../Business/SkillsBusiness";
import styles from "../Style/Skills.module.css";

const Skills = () => {
  const { skills } = SkillsBusiness();
  return (
    <div id="skills" className={styles.skills}>
      <h2>Habilidades</h2>
      <div className={styles.container}>
        {skills.map((skill, index) => {
          return <SkillComponent skill={skill} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
