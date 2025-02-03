import styles from "../Style/Cards.module.css";

const Cards = ({ Type }) => {
  return (
    <div
      className={styles.backgroundImage}
      style={{
        backgroundImage: `url(assets/${Type?.picture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.container}>
        <div className={styles.divition}>
          <div className={styles.title}>{Type?.title}</div>
          <div className={styles.date}>{Type?.date || Type?.tecnologic}</div>
        </div>
        <div className={styles.subtitle}>{Type?.subtitle}</div>
        <div className={styles.description}>{Type?.description}</div>
        {Type?.url && (
          <a href={Type.url} target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
            <span>Ver repositorio</span>
          </a>
        )}
      </div>
    </div>
  );
};
export default Cards;
