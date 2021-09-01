import React, { useState } from 'react';
import '../styles/search.scss';
import qs from 'qs';
import { Link, useLocation } from 'react-router-dom';

const Search = () => {
  const { pathname, search } = useLocation();
  const inputText = qs.parse(search, { ignoreQueryPrefix: true }).search;

  const [value, setValue] = useState(inputText ? inputText : '');

  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  let path =
    pathname === '/departures'
      ? `/departures?search=${value}`
      : `/arrivals?search=${value}`;
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
          <Link to={path}>
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

