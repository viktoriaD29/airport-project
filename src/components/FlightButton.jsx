import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="flight__btn">
      <button
        onClick={() => setSelectedDepartures(!selectedDepartures)}
        className={styleDepartures}
      >
        <Link className={styleDepartures} to="/flightDepartures">
          DEPARTURES
        </Link>
      </button>
      <button
        onClick={() => setSelectedArrives(!selectedArrives)}
        className={styleArrives}
      >
        <Link className={styleArrives} to="/flightArrives">
          ARRIVALS
        </Link>
      </button>
    </div>
  );
};

export default FlightButton;
