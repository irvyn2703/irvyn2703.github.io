import ButtonIcon from "../../../components/ButtonIcon/UI/ButtonIcon";
import Cards from "../../../components/Cards/UI/Cards";
import ProyectBusiness from "../Business/ProyectsBusiness";
import styles from "../Style/Proyects.module.css";

const Proyects = ({ proyects }) => {
  const { proyect, handledClickLeft, handledClickRight } = ProyectBusiness({
    proyects,
  });
  return (
    <section className={styles.proyects} id="proyects">
      <h2>Proyectos</h2>
      <div className={styles.container}>
        <Cards item={proyect} />
        <div className={styles.containerButtons}>
          <ButtonIcon
            icon="fa-solid fa-chevron-left"
            handlendClick={handledClickLeft}
          />
          <ButtonIcon
            icon="fa-solid fa-chevron-right"
            handlendClick={handledClickRight}
          />
        </div>
      </div>
    </section>
  );
};

export default Proyects;
