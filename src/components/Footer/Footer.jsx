import styles from './Footer.module.scss';
import logo from '../../../public/assets/icons/logoheader.svg';
import Image from 'next/image';
import Link from 'next/link';
import vk from '../../../public/assets/icons/social/vk.svg';
import tg from '../../../public/assets/icons/social/tg.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_column}>
        <Image src={logo} alt="logo" width={230} />
        <div className={styles.text}>
          Главные события недели — у вас на почте. <br></br>
          Подписываясь, вы принимаете 
          <Link href="/" style={{ color: '#000', textDecoration: 'underline' }}>
            условия рассылок
          </Link>
        </div>
        <div className={styles.mailing}>
          <input type="text" placeholder="Ваша почта" />
          <button className={styles.btn}>Подписаться</button>
        </div>
      </div>
      <div className={styles.footer_column}>
        <div className={styles.menu}>
          <div className={styles.menu_column}>
            <div className={styles.menu_title}>События</div>
            <div className={styles.menu_links}>
              <Link href="/" className={styles.menu_link}>
                Популярные
              </Link>
              <Link href="/" className={styles.menu_link}>
                Новые
              </Link>
              <Link href="/" className={styles.menu_link}>
                Ближайшие
              </Link>
            </div>
          </div>
          <div className={styles.menu_column}>
            <div className={styles.menu_title}>Информация</div>
            <div className={styles.menu_links}>
              <Link href="/" className={styles.menu_link}>
                О проекте
              </Link>
              <Link href="/" className={styles.menu_link}>
                Контакты
              </Link>
              <Link href="/" className={styles.menu_link}>
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <Link href="/" className={styles.menu_link}>
            Политика конфиденциальности
          </Link>
          <Link href="/" className={styles.menu_link}>
            Условия использования
          </Link>
        </div>
      </div>
      <div className={styles.footer_column}>
        <div className={styles.menu_title}>Мы в соц. сетях</div>
        <div className={styles.socials}>
          <Link href="/">
            <Image src={vk} alt="vk" />
          </Link>
          <Link href="/">
            <Image src={tg} alt="tg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
