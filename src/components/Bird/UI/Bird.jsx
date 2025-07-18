import { motion } from "framer-motion";
import BirdBusiness from "../Business/BirdBusiness";
import style from "../Style/Bird.module.css";

const Bird = () => {
  const { birdRef } = BirdBusiness();

  return (
    <motion.div
      ref={birdRef}
      className={style.bird}
      initial={{ scale: 30, x: "-50%", y: "-50%", opacity: 0 }}
      animate={{
        scale: [10, 9, 1],
        opacity: [0, 1, 1],
      }}
      transition={{
        duration: 5,
        ease: "circOut",
        times: [0, 0.1, 1],
        delay: 1.5,
      }}
    >
      <motion.div
        className={style.birdShape}
        animate={{
          clipPath: [
            // Ala arriba
            "polygon(34% 35%, 50% 48%, 66% 35%, 87% 48%, 66% 40%, 50% 52%, 34% 40%, 13% 48%)",
            // Ala abajo
            "polygon(37% 61%, 50% 48%, 60% 60%, 76% 69%, 58% 63%, 50% 52%, 38% 63%, 20% 68%)",
            // Ala arriba
            "polygon(34% 35%, 50% 48%, 66% 35%, 87% 48%, 66% 40%, 50% 52%, 34% 40%, 13% 48%)",
          ],
        }}
        transition={{
          duration: 1.2,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: 3,
          delay: 1.5,
        }}
        style={{ width: "100%", height: "100%", backgroundColor: "#00495f" }}
      />
    </motion.div>
  );
};

export default Bird;
