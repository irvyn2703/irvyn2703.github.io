import Cards from "../../../components/Cards/UI/Cards";
import EducationBusiness from "../Business/EducationBusiness";
import styles from "../Style/Education.module.css";

const Education = () => {
  const { education } = EducationBusiness();

  return (
    <div id="education" className={styles.education}>
      <h2>Formación</h2>
      <div className={styles.container}>
        {education?.map((item, index) => {
          return <Cards Type={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Education;
