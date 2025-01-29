import styles from "../Style/Cards.module.css";

const Cards = ({ education }) => {
  const { Titulo, subtitulo, Fecha, Imagen, Descripcion } = education;
  console.log(education);
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${Imagen})` }}
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
