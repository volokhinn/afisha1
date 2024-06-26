import React from 'react'
import styles from './Comments.module.scss'
import Link from 'next/link'
import Title from '@/UI/Title/Title'

const Comments = ({children}) => {
  return (
    <div className={styles.wrapper}>
        <Title n={2}>Отзывы и оценки</Title>
            <div className={styles.reviews}>
                {children}
            </div>
    <div className={styles.buttons}>
        <Link href="#" className={styles.buttons_accent}>Смотреть все отзывы</Link>
        <Link href="#" className={styles.buttons_white}>Оставить отзыв</Link>
    </div>
    </div>
  )
}

export default Comments