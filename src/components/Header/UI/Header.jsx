import React from "react";
import styles from "../style/Header.module.css";
import HeaderBusiness from "../business/HeaderBusiness";

const Header = () => {
  const { isMenuOpen, toggleMenu } = HeaderBusiness();
  return (
    <header className={styles.headerStyle}>
      <div className={`${styles.bars} ${styles.activatedButton}`}>
        {isMenuOpen ? (
          <i
            className={`fa-solid fa-xmark ${styles.iStyle}`}
            onClick={toggleMenu}
          ></i>
        ) : (
          <i
            className={`fa-solid fa-bars ${styles.iStyle}`}
            onClick={toggleMenu}
          ></i>
        )}
      </div>
      <h3 className={styles.h3Style}>Irvyn Xicale Cabrera</h3>
      <nav>
        <ul
          className={
            isMenuOpen ? `${styles.ulStyle} ${styles.menuOpen}` : styles.ulStyle
          }
        >
          <li className={styles.liStyle}>
            <a href="#home" className={styles.aStyle}>
              Sobre mi
            </a>
          </li>
          <li className={styles.liStyle}>
            <a href="#skills" className={styles.aStyle}>
              Habilidades
            </a>
          </li>
          <li className={styles.liStyle}>
            <a href="#education" className={styles.aStyle}>
              Formación
            </a>
          </li>
          <li className={styles.liStyle}>
            <a href="#projects" className={styles.aStyle}>
              Proyectos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
