import Montain from "../../Mountain/UI/Mountain";
import Mountains from "../Business/MountainsBusiness";

const Montains = () => {
  const { details } = Mountains();
  return (
    <>
      {details.map((detail, index) => (
        <Montain
          key={index}
          rotated={detail.rotated}
          height={detail.height}
          color={detail.color}
        />
      ))}
    </>
  );
};

export default Montains;
