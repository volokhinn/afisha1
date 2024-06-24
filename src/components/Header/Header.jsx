'use client';

import styles from './Header.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/assets/icons/logoheader.svg';
import loginIcon from '../../../public/assets/icons/login.svg';

import SearchForm from '@/UI/SearchForm/SearchForm';

import '@/app/globals.css';

const Header = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.header_left}>
          <Link href="/">
            <Image src={logo} alt="logo" priority={1} />
          </Link>
          <div className={styles.nav}>
            <Link href="#">Популярные</Link>
            <Link href="#">Новые</Link>
            <Link href="#">Ближайшие</Link>
            <Link href="#">О проекте</Link>
            <Link href="#">Контакты</Link>
          </div>
        </div>
        <div className={styles.header_right}>
          <SearchForm />
          <Link href="#" className={styles.login}>
            <Image src={loginIcon} alt="login" />
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
