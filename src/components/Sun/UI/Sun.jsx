import { motion } from "framer-motion";
import styles from "../Style/Sun.module.css";

const Sun = () => {
  return (
    <motion.div
      className={styles.sun}
      initial={{ y: "100vh", x: "-50%", scale: 0 }}
      animate={{ y: "-50%", scale: 0.8 }}
      transition={{
        duration: 1.5,
        ease: "backOut",
        delay: 1.5,
      }}
    />
  );
};

export default Sun;
