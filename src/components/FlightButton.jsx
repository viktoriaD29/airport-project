import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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


  // const infoDeparturesStyle =
  //   pathname === '/departures' ? 'nav-item_active' : '';
  // const infoArrivalsStyle = pathname === '/arrivals' ? 'nav-item_active' : '';

  return (
    <ul className="flight__btn">
      <Link to="/departures">
        <button
          onClick={() => setSelectedDepartures(!selectedDepartures)}
          className={styleDepartures}
        >
          Departures
        </button>
      </Link>

      <Link to="/arrivals">
        <button
          onClick={() => setSelectedArrives(!selectedArrives)}
          className={styleArrives}
        >
          Arrivals
        </button>
      </Link>
    </ul>
  );
};

export default FlightButton;

// /*
// кожна кнопка є силкою на іншу сторінку з компонентою флайт
// шлях до компоненти флайт відповідє переданому масиву

// коли вводиш текст він зберігається з параметрах юрл і при кіку на кнопку сьорч малюється та сторінка вже з цим юрл
// */
