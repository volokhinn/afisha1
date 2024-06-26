'use client';
import styles from './SectionCard.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const SectionCard = ({
  bgImage,
  label,
  labelTextColor,
  labelBgColor,
  contentTitle,
  contentText,
  btnLink,
}) => {
  const [bg, setBg] = useState(bgImage);

  useEffect(() => {
    setBg(bgImage);
  }, [bgImage]);

  return (
    <div className={styles.card}>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${bg})` }}>
        <div
          className={styles.label}
          style={{ color: `${labelTextColor}`, backgroundColor: `${labelBgColor}` }}>
          {label}
        </div>
        <div className={styles.content}>
          <Link href={btnLink} className={styles.content_btn}>
            Смотреть событие
          </Link>
        </div>
      </div>
      <h3 className={styles.content_title}>{contentTitle}</h3>
      <p className={styles.content_text}>{contentText}</p>
    </div>
  );
};

export default SectionCard;
