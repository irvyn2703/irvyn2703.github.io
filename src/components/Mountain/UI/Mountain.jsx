import styles from "../Style/Mountain.module.css";

const Montain = ({ rotated, height, color, delay }) => {
  return (
    <div
      className={styles.mountain}
      style={{ height: height, animationDelay: delay }}
    >
      <div
        className={rotated ? styles.form1 : styles.form2}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default Montain;
