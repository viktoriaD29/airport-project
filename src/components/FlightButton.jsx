import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {dataFlight} from '../flights/flight.gateway'
import { useLocation } from 'react-router-dom';


/*
кожна кнопка є силкою на іншу сторінку з компонентою флайт
шлях до компоненти флайт відповідє переданому масиву

коли вводиш текст він зберігається з параметрах юрл і при кіку на кнопку сьорч малюється та сторінка вже з цим юрл
*/

const FlightButton = () => {
  const [selectedDepartures, setSelectedDepartures] = useState(false);
  const [selectedArrives, setSelectedArrives] = useState(false);

  let styleDepartures =
    selectedDepartures === true
      ? 'flight__btn-departures-click'
      : 'flight__btn-departures';

  let styleArrives =
    selectedArrives === true
      ? 'flight__btn-arrivals-click'
      : 'flight__btn-arrivals';
  
  const { pathname } = useLocation();

  // const { search, pathname } = useLocation();
  // {
  //   `/departure/${dataFlight}${search}`;
  // }

  return (
    <div className="flight__btn">
      <Link to="/departure">
        <button
          onClick={() => setSelectedDepartures(!selectedDepartures)}
          className={styleDepartures}
        >
          DEPARTURES
        </button>
      </Link>
      <Link to="/arrival">
        <button
          onClick={() => setSelectedArrives(!selectedArrives)}
          className={styleArrives}
        >
          ARRIVALS
        </button>
      </Link>
    </div>
  );
};

export default FlightButton;
