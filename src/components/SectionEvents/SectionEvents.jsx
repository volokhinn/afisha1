import styles from './SectionEvents.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '../../../public/assets/icons/smallarrow.svg';

const SectionEvents = ({ title, link, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <Link href={link} className={styles.link}>
          Все <Image className={styles.icon} src={arrow} alt="arrow" />
        </Link>
      </div>
      <div className={styles.events}>{children}</div>
    </div>
  );
};

export default SectionEvents;
