'use client';

import React, { useState } from 'react';
import styles from './Filter.module.scss';
import Calendar from '@/UI/Calendar/Calendar';
import SearchForm from '@/UI/SearchForm/SearchForm';
import Image from 'next/image';
import eventTypeIcon from '../../../public/assets/icons/thunder.svg';
import childrenIcon from '../../../public/assets/icons/kids.svg';
import sliderarrow from '../../../public/assets/icons/sliderarrow.svg';

const Filter = () => {
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [isPosterSelected, setIsPosterSelected] = useState(false);
  const [isChildrenSelected, setIsChildrenSelected] = useState(false);

  const eventTypes = [
    { value: 'concert', label: 'Концерт' },
    { value: 'theater', label: 'Театр' },
    { value: 'exhibition', label: 'Выставка' },
  ];

  const handleEventTypeChange = (event) => {
    setSelectedEventType(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Афиша событий во Владивостоке</h2>
      <Calendar />
      <div className={styles.filter}>
        <SearchForm />
        <div className={styles.dropdownContainer}>
          <select
            className={styles.dropdown}
            onChange={handleEventTypeChange}
            value={selectedEventType || ''}>
            <option value="" disabled>
              Тип мероприятия
            </option>
            {eventTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.checkboxContainer}>
          <label className={`${styles.checkboxLabel} ${isPosterSelected ? styles.checked : ''}`}>
            <input
              type="checkbox"
              checked={isPosterSelected}
              onChange={() => setIsPosterSelected(!isPosterSelected)}
              className={styles.checkboxInput}
            />
            <Image src={eventTypeIcon} alt="Выбор афиши" className={styles.icon} />
            Выбор афиши
          </label>
          <label className={`${styles.checkboxLabel} ${isChildrenSelected ? styles.checked : ''}`}>
            <input
              type="checkbox"
              checked={isChildrenSelected}
              onChange={() => setIsChildrenSelected(!isChildrenSelected)}
              className={styles.checkboxInput}
            />
            <Image src={childrenIcon} alt="Детские" className={styles.icon} />
            Детские
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
