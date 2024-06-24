import styles from './PersAccSection.module.scss';
import Image from 'next/image';
import events from '../../../public/assets/events.png';
import PersAccSectionSlider from './PersAccSectionSlider/PersAccSectionSlider';
import Link from 'next/link';

const PersAccSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2>Отслеживай новинки в своем личном кабинете</h2>
        <div className={styles.slider_wrapper}>
          <PersAccSectionSlider />
          <div className={styles.slider_text}>
            <div className={styles.title}>НОВИНКИ</div>
            <div className={styles.text}>
              Мы рады представить вам самые свежие новинки афиши, которые уже доступны в вашем
              личном кабинете!
            </div>
          </div>
          <Link href="/" className={styles.btn}>
            Войти в личный кабинет
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <Image src={events} alt="events" />
      </div>
    </div>
  );
};

export default PersAccSection;
