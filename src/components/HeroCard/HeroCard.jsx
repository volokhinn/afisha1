'use client';
import styles from './HeroCard.module.scss';
import { useState, useEffect } from 'react';

const HeroCard = ({
  bgImage,
  label,
  labelTextColor,
  labelBgColor,
  contentLabel,
  contentTitle,
  contentText,
  btnLink,
  btnTextColor,
  btnBgColor,
}) => {
  const [bg, setBg] = useState(bgImage);

  useEffect(() => {
    setBg(bgImage);
  }, [bgImage]);

  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${bg})` }}>
      <div
        className={styles.label}
        style={{ color: `${labelTextColor}`, backgroundColor: `${labelBgColor}` }}>
        {label}
      </div>
      <div className={styles.content}>
        <div className={styles.content_label}>{contentLabel}</div>
        <h3 className={styles.content_title}>{contentTitle}</h3>
        <p className={styles.content_text}>{contentText}</p>
        <a
          href={btnLink}
          className={styles.content_btn}>
          Смотреть событие
        </a>
      </div>
    </div>
  );
};

export default HeroCard;
