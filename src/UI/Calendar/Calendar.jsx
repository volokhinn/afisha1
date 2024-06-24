'use client';

import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import styles from './Calendar.module.scss';
import Image from 'next/image';
import calendararrow from '../../../public/assets/icons/calendararrow.svg';

dayjs.locale('ru');

const Calendar = () => {
  const today = dayjs();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDayClick = (day) => {
    const clickedDate = dayjs(day);
    const isSelected = selectedDates.some((date) => date.isSame(clickedDate, 'day'));

    if (isSelected) {
      setSelectedDates(selectedDates.filter((date) => !date.isSame(clickedDate, 'day')));
    } else if (selectedDates.length === 2) {
      setSelectedDates([clickedDate]);
    } else if (selectedDates.length === 1) {
      const startDate = selectedDates[0];
      const endDate = clickedDate;
      const datesInRange = [];
      let currentDate = startDate;

      while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
        datesInRange.push(currentDate);
        currentDate = currentDate.add(1, 'day');
      }

      setSelectedDates(datesInRange);
    } else {
      setSelectedDates([clickedDate]);
    }
  };

  const handlePrevMonth = () => {
    const newDate = currentDate.subtract(1, 'month');
    if (newDate.isBefore(today, 'month')) return;
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const renderMonth = (date) => {
    const daysInMonth = date.daysInMonth();
    const daysArray = [];
    const startDay = date.isSame(today, 'month') ? today.date() : 1;

    daysArray.push(
      <div key={`${date.month()}-label`} className={styles.monthLabel}>
        {date.format('MMMM')}
      </div>,
    );

    for (let day = startDay; day <= daysInMonth; day++) {
      const currentDay = date.date(day);
      const isWeekend = currentDay.day() === 0 || currentDay.day() === 6; // 0 - воскресенье, 6 - суббота
      const isSelected = selectedDates.some((selectedDate) =>
        selectedDate.isSame(currentDay, 'day'),
      );
      daysArray.push(
        <div
          key={day}
          className={`${styles.day} ${isSelected ? styles.selected : ''} ${
            isWeekend ? styles.weekend : ''
          }`}
          onClick={() => handleDayClick(currentDay)}>
          <div className={styles.dateNumber}>{currentDay.date()}</div>
          <div className={styles.dayOfWeek}>{currentDay.format('dd')}</div>
        </div>,
      );
    }
    return (
      <div key={date.month()} className={styles.month}>
        <div className={styles.daysContainer}>{daysArray}</div>
      </div>
    );
  };

  const renderMonths = () => {
    const monthsArray = [];
    for (let i = 0; i < 4; i++) {
      const month = currentDate.add(i, 'month');
      monthsArray.push(renderMonth(month));
    }
    return monthsArray;
  };

  React.useEffect(() => {
    console.log(
      'Selected dates:',
      selectedDates.map((date) => date.format('YYYY-MM-DD')),
    );
  }, [selectedDates]);

  return (
    <div className={styles.calendar}>
      <button
        onClick={handlePrevMonth}
        className={`${styles.navButton} ${styles.navButton_prev}`}
        disabled={currentDate.isSame(today, 'month')}>
        <Image src={calendararrow} alt="arrow" />
      </button>
      <div className={styles.monthsContainer}>{renderMonths()}</div>
      <button onClick={handleNextMonth} className={`${styles.navButton} ${styles.navButton_next}`}>
        <Image src={calendararrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Calendar;
