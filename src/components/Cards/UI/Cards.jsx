import styles from "../Style/Cards.module.css";

const Cards = ({ Type }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(assets/${Type?.picture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: "70vh",
      }}
    >
      <div className={styles.divition}>
        <div className={styles.title}>{Type?.title}</div>
        <div className={styles.date}>{Type?.date}</div>
      </div>
      <div className={styles.subtitle}>{Type?.subtitle}</div>
      <div className={styles.description}>{Type?.description}</div>
    </div>
  );
};
export default Cards;
