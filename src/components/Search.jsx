import React, { useState } from 'react';
import '../styles/search.scss';
import { Link, useLocation } from 'react-router-dom';

const Search = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState('');

  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <>
      <h2 className="search__title">SEARCH FLIGHT</h2>
      <div className="search__container">
        <i className="fas fa-search search__container__icon"></i>
        <form className="search__form">
          <input
            className="search__input"
            type="text"
            placeholder="Airline, destination or flight #"
            value={value}
            onChange={onChange}
          />
          <Link
            to={
              pathname === '/departures'
                ? `/departures?search=${value}`
                : `${pathname}?search=${value}`
            }
          >
            <button className="search__btn" type="submit">
              Search
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Search;
