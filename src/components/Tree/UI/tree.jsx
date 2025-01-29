import styles from "../Style/Tree.module.css";

const Tree = ({ position }) => {
  return (
    <div className={styles.tree} style={{ left: `${position}%` }}>
      <div className={styles.leaves}></div>
      <div className={styles.leaves}></div>
      <div className={styles.leaves}></div>
      <div className={styles.leaves}></div>
      <div className={styles.leaves}></div>
      <div className={styles.trunk}></div>
    </div>
  );
};

export default Tree;
