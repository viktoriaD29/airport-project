import React from 'react';

const DeparturesList = ({ flight }) => {
  //return <div>{console.log(flight)}</div>;

  return (
    <ul className="cities-list">
      {flight.map((el) => (
        <li className="city" key={el.ID}>
          <span className="city__name">{el.term}</span>
          <span className="city__name">{el.timeBoard}</span>
          {/* <span className="city__name">{el.airportToID.city_en}</span> */}
          <span className="city__name">{`Landed ${el.timeDepFact}`}</span>
          <span className="city__name">{`${el.codeShareData.logo}${el.codeShareData.icao}`}</span>
          <span className="city__name">{el.codeShareData.codeShare}</span>
        </li>
      ))}
    </ul>
  );
};

export default DeparturesList;
