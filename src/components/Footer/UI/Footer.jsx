import FooterBusiness from "../Business/FooterBusiness";
import styles from "../Style/Footer.module.css";

const Footer = () => {
  const { handleCopy } = FooterBusiness();

  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/irvyn-xicale-cabrera-b627a1300"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/irvyn2703"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <span>---</span>
      </div>
      <div className={styles.main}>
        <img src="https://github.com/irvyn2703.png" alt="logo" />
      </div>
      <div className={styles.icons}>
        <span>---</span>
        <i
          className="fas fa-phone"
          onClick={() => handleCopy("2226691915")}
        ></i>
        <i
          className="fas fa-envelope"
          onClick={() => handleCopy("irvynxicale@hotmail.com")}
        ></i>
      </div>
    </footer>
  );
};

export default Footer;
