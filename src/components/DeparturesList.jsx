import React from 'react';
import moment from 'moment';

const DeparturesList = ({ flightDepartures }) => {
  return (
    <main>
      <ul className="">
        {flightDepartures.map((el) => (
          <li className="" key={el.ID}>
            <span className="">{el.term}</span>
            <span className="">{moment(el.timeBoard).format('hh:mm')}</span>
            <span className="">{el['airportToID.city_en']}</span>
            <span className="">{`Landed ${moment(el.timeDepFact).format(
              'hh:mm'
            )}`}</span>
            <span className="">
              <img src={el.airline.en.logoName} alt="Logo" />
              {el.airline.en.name}
            </span>
            <span className="">{el.codeShareData[0].codeShare}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default DeparturesList;
