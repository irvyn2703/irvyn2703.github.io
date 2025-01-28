import styles from "../Style/SkillComponent.module.css";

const SkillComponent = ({ skill }) => {
  const { icon, text } = skill;
  return (
    <div className={styles.skill}>
      <i className={icon}></i>
      <span>{text}</span>
    </div>
  );
};

export default SkillComponent;
