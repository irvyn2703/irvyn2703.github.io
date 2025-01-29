import Cards from "../../../components/Cards/UI/Cards";
import styles from "../Style/Education.module.css";

const Education = ({ education }) => {
  return (
    <div id="education" className={styles.education}>
      <h2>Formación</h2>
      <div className={styles.container}>
        {education?.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Education;
