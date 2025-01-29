import { useEffect, useRef } from "react";

const BirdBusiness = () => {
  const birdRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (birdRef.current) {
        birdRef.current.style.animationPlayState = "paused";
      }
    }, 9500);

    return () => clearTimeout(timer);
  }, []);

  return { birdRef };
};

export default BirdBusiness;
