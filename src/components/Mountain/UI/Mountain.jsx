import { motion } from "framer-motion";
import styles from "../Style/Mountain.module.css";

const Montain = ({ rotated, height, color, delay }) => {
  return (
    <motion.div
      className={styles.mountain}
      initial={{ translateX: rotated ? window.innerWidth : -window.innerWidth }}
      animate={{ translateX: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: parseFloat(delay) || 0,
      }}
      style={{ height }}
    >
      <div
        className={rotated ? styles.form1 : styles.form2}
        style={{ backgroundColor: color }}
      ></div>
    </motion.div>
  );
};

export default Montain;
