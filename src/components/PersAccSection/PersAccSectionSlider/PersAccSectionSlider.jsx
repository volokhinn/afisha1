'use client';

import styles from './PersAccSectionSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Image from 'next/image';
import image1 from '../../../../public/assets/icons/sliderpersacc/image1.png';
import image2 from '../../../../public/assets/icons/sliderpersacc/image2.png';
import image3 from '../../../../public/assets/icons/sliderpersacc/image3.png';

const PersAccSectionSlider = () => {
  return (
    <div className={styles.slider_wrapper}>
      <div className={styles.blur}></div>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={25}
          slidesPerView={4}
          loop
          centeredSlides
          className="persAccSlider"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={500}
          modules={[Autoplay]}>
          <SwiperSlide>
            <Image src={image1} alt="image1" className={styles.slider_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image2} alt="image2" className={styles.slider_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image3} alt="image3" className={styles.slider_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image1} alt="image1" className={styles.slider_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image2} alt="image2" className={styles.slider_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image3} alt="image3" className={styles.slider_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image1} alt="image1" className={styles.slider_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image2} alt="image2" className={styles.slider_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image3} alt="image3" className={styles.slider_img} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PersAccSectionSlider;
