'use client'

import '@/app/globals.css'
import styles from './EventPage.module.scss'
import Link from 'next/link';
import SectionEvents from '@/components/SectionEvents/SectionEvents';
import SectionCard from '@/components/SectionCard/SectionCard';
import Comments from '@/components/Comments/Comments';
import CommentsCard from '@/components/Comments/CommentsCard/CommentsCard';
import Title from '@/UI/Title/Title';

import bg from '../../../../public/assets/atlas.png'

const EventPage = () => {


  return (
    <div className='container'>
        <div className={styles.head} style={{ backgroundImage: `url(${bg.src})` }}>
        <div className={styles.label}>
            Концерт
        </div>
            <div className={styles.head_content}>
        <Title n={1}>Андрей Атлас</Title>
        <p className={styles.head_content_text}>25 июня, 18:00</p>
        <Link href="#" className={styles.head_content_btn}>Отзывы о событии</Link>
            </div>
        </div>

        <div className={styles.content}>
            <Title n={2}>О событии</Title>
            <p>
            Встречайте — первый именной сольный стендап-тур Андрея Атласа! <br></br><br></br>
            Резидент проекта StandUp на ТНТ шутит о близких всем вещах понятным языком, без грубости и цинизма. Комик полюбился зрителям за свой честный юмор, эмоциональную подачу и критичный взгляд на жизнь. <br></br><br></br>
            Концертом «Две спальни» он решил отметить десятилетний юбилей комедийного пути и своей семейной жизни. Андрей расскажет о его самых важных решениях и моментах жизни, с которыми, пожалуй, сталкивался каждый из нас. Будет над чем задуматься, о чём погрустить и уж, конечно, над чем искренне посмеяться!
            </p>
        </div>

        <SectionEvents title="Вам понравится">
          <SectionCard
            bgImage={bg.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentTitle="Pepel Nahudi"
            contentText="14 июля, 18:00"
            btnLink="/"
          />
          <SectionCard
            bgImage={bg.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentTitle="КИПЕЛОВ"
            contentText="18 июня, 19:00"
            btnLink="/"
          />
          <SectionCard
            bgImage={bg.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentTitle="Андрей Атлас"
            contentText="25 июня, 18:00"
            btnLink="/"
          />
        </SectionEvents>
        <Comments>
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
        </Comments>
    </div>
  );
};

export default EventPage;
