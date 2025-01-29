import styles from "../Style/Cards.module.css";

const Cards = ({ item }) => {
  const {
    Titulo = "",
    subtitulo = "",
    Fecha = "",
    Imagen = "",
    Descripcion = "",
  } = item;
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(assets/${Imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: "70vh",
      }}
    >
      <div className={styles.divition}>
        <div className={styles.title}>{Titulo}</div>
        <div className={styles.date}>{Fecha}</div>
      </div>
      <div className={styles.subtitle}>{subtitulo}</div>
      <div className={styles.description}>{Descripcion}</div>
    </div>
  );
};
export default Cards;
