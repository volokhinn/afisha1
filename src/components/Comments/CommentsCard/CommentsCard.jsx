import React from 'react'
import styles from './CommentsCard.module.scss'
import Image from 'next/image'
import review from '../../../../public/assets/reviews/review.png'

const CommentsCard = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.info}>
            <Image src={review} alt="review" />
            <div className={styles.info_right}>
                <div className={styles.info_right_name}>Егор Дружинин</div>
                <div className={styles.info_right_date}>6 мая 2024</div>
            </div>
        </div>
        <div className={styles.text}>
            Ходили на концерт-съемку в апреле. Моментами было очень смешно. Но только моментами. Второй раз не пойду. Андрей Атлас в VK мне нравится больше, чем вживую.
        </div>
    </div>
  )
}

export default CommentsCard