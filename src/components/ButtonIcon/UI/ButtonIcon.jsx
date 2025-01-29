import styles from "../Style/ButtonIcon.module.css";

const ButtonIcon = ({ icon, handlendClick }) => {
  return (
    <button onClick={handlendClick} className={styles.buttonStyle}>
      <i className={icon}></i>
    </button>
  );
};

export default ButtonIcon;
