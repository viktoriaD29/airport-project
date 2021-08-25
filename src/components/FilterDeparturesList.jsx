import React from 'react';
import moment from 'moment';

const FilterDeparturesList = ({ filterFlightDepartures }) => {
  return (
    <main>
      <ul className="flights__list">
        {filterFlightDepartures.map((el) => (
          <li className="flight" key={el.ID}>
            <span className="flight__terminal">{el.term}</span>
            <span className="flight__local-time">
              {moment(el.timeBoard).format('hh:mm')}
            </span>
            <span className="flight__destination">
              {el['airportToID.city_en']}
            </span>
            <span className="flight__status">{`Landed ${moment(
              el.timeDepFact
            ).format('hh:mm')}`}</span>
            <span className="flight__airline">
              <img
                className="flight__airline-logo"
                src={el.airline.en.logoName}
                alt="Logo"
              />
              {el.airline.en.name}
            </span>
            <span className="flight__airline-flight">
              {el.codeShareData[0].codeShare}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default FilterDeparturesList;
