import React, { useEffect } from 'react';
import * as flightsAction from '../flights/flight.actions';
import { connect } from 'react-redux';
import { filterFlightListSelector, filterSearchListSelector } from '../flights/flight.selectors';
import { useParams, useLocation } from 'react-router-dom';
import qs from 'qs';
import moment from 'moment';

const Flights = ({ getFlightList, flightsList, getflightText }) => {
  const { direction } = useParams();
  const { search } = useLocation();
  const inputText = qs.parse(search, { ignoreQueryPrefix: true }).search;

  useEffect(() => {
    getFlightList(direction);
  }, [direction]);

  useEffect(() => {
    getflightText(inputText);
  }, [inputText]);

  
  return (
    <>
      {flightsList.length === 0 ? (
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
            <tbody className="table__container__body">
              {flightsList.map((flight) => {
                const styleTerminal =
                  flight.term === 'A'
                    ? 'flight__terminal_green'
                    : 'flight__terminal_blue';
                return (
                  <tr key={flight.ID}>
                    <td>
                      <span className={styleTerminal}>{flight.term}</span>
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
      )}
    </>
  );
};

const mapDispatch = {
  getFlightList: flightsAction.getFlightData,
  getflightText: flightsAction.flightTextAction,
};

const mapState = (state) => ({
  //flightText: flightTextSelector(state),
  flightsList: filterFlightListSelector(state),
  // flightsList: filterSearchListSelector(state),
});

export default connect(mapState, mapDispatch)(Flights);
