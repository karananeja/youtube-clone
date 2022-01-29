import React, { useState } from 'react';
import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');

  const searchInput = () => {
    setInputSearch('');
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <Menu />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png'
            alt='YouTube Logo'
          />
        </Link>
      </div>
      <div className='header__input'>
        <input
          type='text'
          placeholder='Search'
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <Search className='header__inputButton' onClick={searchInput} />
        </Link>
      </div>
      <div className='header__icons'>
        <VideoCall className='header__icon' />
        <Apps className='header__icon' />
        <Notifications className='header__icon' />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
