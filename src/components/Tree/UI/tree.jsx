import { motion } from "framer-motion";
import styles from "../Style/Tree.module.css";

const Tree = ({ position }) => {
  return (
    <motion.div
      className={styles.tree}
      style={{ left: `${position}%` }}
      initial={{ opacity: 0, rotateX: 100 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <div className={styles.leaves}></div>
      <div className={styles.leaves}></div>
      <div className={styles.leaves}></div>
      <div className={styles.leaves}></div>
      <div className={styles.leaves}></div>
      <div className={styles.trunk}></div>
    </motion.div>
  );
};

export default Tree;
