import React, { useEffect } from 'react';
import * as flightsAction from '../flights/flight.actions';
import { connect } from 'react-redux';
import {
  filterFlightListSelector,
} from '../flights/flight.selectors';
import { useParams, useLocation } from 'react-router-dom';
import qs from 'qs';
import moment from 'moment';

const Flights = ({ getFlightList, flightsList, getflightText }) => {
  const { direction } = useParams();
  const { search } = useLocation();
  const querySearch = qs.parse(search, { ignoreQueryPrefix: true }).search;

  useEffect(() => {
    getFlightList(direction);
  }, [direction]);

  useEffect(() => {
    getflightText(querySearch);
  }, [querySearch]);

  // if (flightsList.length === 0) {
  //   return <h2 className="no-flights">No flights</h2>;
  // }

  return flightsList.length === 0 ? (
    <div className="noFlight">No flight</div>
  ) : (
    <div className="table">
      <table className="table__container">
        <thead className="table__container__head">
          <tr>
            <th className="table__container__head__item">Terminal</th>
            <th className="table__container__head__item">Local time</th>
            <th className="table__container__head__item">Destination</th>
            <th className="table__container__head__item">Status</th>
            <th className="table__container__head__item">Airline</th>
            <th className="table__container__head__item">Flight</th>
            <th className="table__container__head__item"></th>
          </tr>
        </thead>
        <tbody>
          {flightsList.map((flight) => {
            return (
              <tr key={flight.ID}>
                <td>
                  <span className="flight__terminal">{flight.term}</span>
                </td>
                <td>
                  <span className="flight__local-time">
                    {moment(flight.timeBoard).format('hh:mm')}
                  </span>
                </td>
                <td>
                  <span className="flight__destination">
                    {flight['airportToID.city_en']}
                  </span>
                </td>
                <td>
                  <span className="flight__status">{`Landed ${moment(
                    flight.timeDepFact
                  ).format('hh:mm')}`}</span>
                </td>
                <td>
                  <span className="flight__airline">
                    <img
                      className="flight__airline-logo"
                      src={flight.airline.en.logoName}
                      alt="Logo"
                    />
                    {flight.airline.en.name}
                  </span>
                </td>
                <td>
                  <span className="flight__airline-flight">
                    {flight.codeShareData[0].codeShare}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatch = {
  getFlightList: flightsAction.getFlightData,
  getflightText: flightsAction.flightTextAction,
};

const mapState = (state) => ({
  //flightText: flightTextSelector(state),
  flightsList: filterFlightListSelector(state),
});

export default connect(mapState, mapDispatch)(Flights);
