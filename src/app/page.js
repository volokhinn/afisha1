import Image from 'next/image';
import styles from './page.module.css';
import HeroCardSlider from '@/components/HeroCardSlider/HeroCardSlider';
import SectionEvents from '@/components/SectionEvents/SectionEvents';
import SectionCard from '@/components/SectionCard/SectionCard';
import chess from '../../public/assets/chess.png';
import PersAccSection from '@/components/PersAccSection/PersAccSection';
import Filter from '@/components/Filter/Filter';
import '@/app/globals.css';

export default function Home() {
  return (
    <div>
      <HeroCardSlider />
      <div className="container">
        <Filter />
        <SectionEvents title="Концерты" link="/">
          <SectionCard
            bgImage={chess.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentTitle="Pepel Nahudi"
            contentText="14 июля, 18:00"
            btnLink="/"
          />
          <SectionCard
            bgImage={chess.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentTitle="КИПЕЛОВ"
            contentText="18 июня, 19:00"
            btnLink="/"
          />
          <SectionCard
            bgImage={chess.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentTitle="Андрей Атлас"
            contentText="25 июня, 18:00"
            btnLink="/"
          />
        </SectionEvents>
        <SectionEvents title="Детям" link="/">
          <SectionCard
            bgImage={chess.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentTitle="Pepel Nahudi"
            contentText="14 июля, 18:00"
            btnLink="/"
          />
          <SectionCard
            bgImage={chess.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentTitle="КИПЕЛОВ"
            contentText="18 июня, 19:00"
            btnLink="/"
          />
          <SectionCard
            bgImage={chess.src}
            label="Концерт"
            labelTextColor="#fff"
            labelBgColor="rgba(255, 72, 72, 1)"
            contentTitle="Андрей Атлас"
            contentText="25 июня, 18:00"
            btnLink="/"
          />
        </SectionEvents>
        <PersAccSection />
      </div>
    </div>
  );
}
