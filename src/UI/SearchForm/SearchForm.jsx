'use client';

import styles from './SearchForm.module.scss';
import Image from 'next/image';

import searchIcon from '../../../public/assets/icons/search.svg';
import cancelIcon from '../../../public/assets/icons/cancel.svg';

import { useState } from 'react';

const SearchForm = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  
  return (
    <form className={styles.search}>
      <Image src={searchIcon} alt="search" />
      <input
        onChange={handleSearch}
        type="search"
        className={styles.search_input}
        placeholder="Поиск событий"
        value={search}
      />
      {search !== '' ? (
        <Image src={cancelIcon} alt="clear" height={20} width={20} onClick={() => setSearch('')} />
      ) : null}
    </form>
  );
};

export default SearchForm;
