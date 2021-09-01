import React from 'react';
import '../styles/flightButton.scss';
import { Link, useLocation } from 'react-router-dom';

const FlightButton = () => {
  const { pathname } = useLocation();

  const styleBtnDepartures =
    pathname === '/departures'
      ? 'flight__btn-departures-click'
      : 'flight__btn-departures';

  const styleBtnArrivals =
    pathname === '/arrivals'
      ? 'flight__btn-arrivals-click'
      : 'flight__btn-arrivals';

  return (
    <div className="flight__btn">
      <Link to="/departures">
        <button className={styleBtnDepartures}>
          <i className="fas fa-plane-departure flight__btn__icon"></i>Departures
        </button>
      </Link>

      <Link to="/arrivals">
        <button className={styleBtnArrivals}>
          <i className="fas fa-plane-arrival flight__btn__icon"></i>Arrivals
        </button>
      </Link>
    </div>
  );
};

export default FlightButton;

