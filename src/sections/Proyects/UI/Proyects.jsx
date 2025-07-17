import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Cards from "../../../components/Cards/UI/Cards";
import styles from "../Style/Proyects.module.css";

const Proyects = ({ proyects }) => {
  return (
    <section className={styles.proyects} id="proyects">
      <h2>Proyectos</h2>
      <div className={styles.container}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={0}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 100,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {proyects.map((proyect, index) => (
            <SwiperSlide key={index}>
              <Cards item={proyect} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Proyects;
