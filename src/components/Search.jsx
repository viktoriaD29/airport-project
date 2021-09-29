import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/search.scss';

const Search = () => {
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
          <Link to={`?search=${value}`}>
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
