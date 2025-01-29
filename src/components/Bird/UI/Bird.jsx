import BirdBusiness from "../Business/BirdBusiness";
import style from "../Style/Bird.module.css";

const Bird = () => {
  const { birdRef } = BirdBusiness();
  return <div ref={birdRef} className={style.bird}></div>;
};

export default Bird;
