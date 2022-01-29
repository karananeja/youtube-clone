import { TuneOutlined } from '@mui/icons-material';
import React from 'react';
import '../css/SearchPage.css';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
    </div>
  );
};

export default SearchPage;
