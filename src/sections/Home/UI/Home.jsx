import React from "react";
import HomeBusiness from "../Business/HomeBusiness";
import styles from "../Style/Home.module.css";

const Home = () => {
  const { data, handleClicked } = HomeBusiness();
  return (
    <div className={styles.home} id="home">
      <div className={styles.mainContainer}>
        <div className={styles.containerLeft}>
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador apasionado por crear aplicaciones que optimicen
            y automaticen procesos, con experiencia en el desarrollo de
            soluciones web y móviles dinámicas, escalables y centradas en el
            usuario. Manejo tecnologías modernas como React, React Native,
            Node.js y Java, y disfruto resolver problemas, innovar y mejorar
            continuamente mis habilidades.
          </p>
          <button onClick={handleClicked}>Descargar CV</button>
        </div>
        <div className={styles.containerRigth}>
          <div className={styles.icons}>
            {data.map((element, index) => (
              <div key={index} className={styles.icon}>
                <i className={`${element.icon}`}></i>
                <p>{element.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.language}>
            <div className={styles.languageContainer}>
              <div>
                <b>Español</b>
                <div>Nativo</div>
              </div>
              <div>
                <b>Inglés</b>
                <div>Intermedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
