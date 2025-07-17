import styles from "../Style/Cards.module.css";

const Cards = ({ item }) => {
  const { Titulo = "", subtitulo = "", Fecha = "", Descripcion = "" } = item;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.divition}>
          <div className={styles.title}>{Titulo}</div>
          <div className={styles.date}>{Fecha}</div>
        </div>
        <div className={styles.subtitle}>{subtitulo}</div>
        <div className={styles.description}>{Descripcion}</div>
      </div>
    </div>
  );
};
export default Cards;
