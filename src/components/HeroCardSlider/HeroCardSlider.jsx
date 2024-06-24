'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './HeroCardSlider.module.scss';

import HeroCard from '../HeroCard/HeroCard';
import chess from '../../../public/assets/chess.png';
import varvara from '../../../public/assets/varvara.png';
import pepel from '../../../public/assets/pepel.png';
import { useRef } from 'react';

const HeroCardSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className={styles.section}>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={2.7}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}>
        <SwiperSlide>
          <HeroCard
            bgImage={chess.src}
            contentLabel="ТУРНИР"
            contentTitle="Шахматный Владивосток"
            contentText="10 июля, ​СК Чемпион​ Партизанский проспект, 44 к5"
            btnText="Смотреть событие"
            btnLink="/"
            btnTextColor="#000"
            btnBgColor="#fff"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            bgImage={varvara.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentLabel="СТЕНДАП"
            contentTitle="Варвара Щербакова"
            contentText="27 августа, вторник, 19:00 Fesco Hall"
            btnText="Есть билеты"
            btnLink="/"
            btnTextColor="rgba(253, 23, 116, 1)"
            btnBgColor="rgba(255, 220, 234, 1)"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            bgImage={pepel.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentLabel="КОНЦЕРТ"
            contentTitle="Pepel Nahudi"
            contentText="Концерт во Владивостоке"
            btnText="Есть билеты"
            btnLink="/"
            btnTextColor="rgba(136, 0, 255, 1)"
            btnBgColor="rgba(237, 217, 255, 1)"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            bgImage={pepel.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentLabel="ТУРНИР"
            contentTitle="Шахматный Владивосток"
            contentText="10 июля, ​СК Чемпион​ Партизанский проспект, 44 к5"
            btnText="Смотреть событие"
            btnLink="/"
            btnTextColor="#000"
            btnBgColor="#fff"
          />
        </SwiperSlide>
      </Swiper>
      <button className="heroslider swiper-button-prev"></button>
      <button className="heroslider swiper-button-next"></button>
    </div>
  );
};

export default HeroCardSlider;
