import React, { useEffect } from 'react';
import '../styles/flights.scss';
import * as flightsAction from '../flights/flight.actions';
import { connect } from 'react-redux';
import { filterFlightListSelector } from '../flights/flight.selectors';
import { useParams, useLocation } from 'react-router-dom';
import qs from 'qs';
import moment from 'moment';

const Flights = ({ getFlightList, flightsList, getflightText }) => {
  const { direction } = useParams();
  const inputText = qs.parse(useLocation().search, { ignoreQueryPrefix: true });

  useEffect(() => {
    getFlightList(direction);
  }, [direction]);

  useEffect(() => {
    getflightText(inputText.search);
  }, [inputText.search]);

  return (
    <>
      {flightsList.length === 0 ? (
        <div className="noFlight-text">No flight</div>
      ) : (
        <div className="table">
          <table className="table__container">
            <thead className="table__container__head">
              <tr className="table__container__head__box">
                <th>
                  <span className="table__container__head__item">Terminal</span>
                </th>
                <th>
                  <span className="table__container__head__item">
                    Local time
                  </span>
                </th>
                <th>
                  <span className="table__container__head__item">
                    Destination
                  </span>
                </th>
                <th>
                  <span className="table__container__head__item">Status</span>
                </th>
                <th>
                  <span className="table__container__head__item">Airline</span>
                </th>
                <th>
                  <span className="table__container__head__item">Flight</span>
                </th>
              </tr>
            </thead>
            <tbody className="table__container__body">
              {flightsList.map((flight) => {
                const styleTerminal =
                  flight.term === 'A'
                    ? 'flight__terminal_green'
                    : 'flight__terminal_blue';
                return (
                  <tr className="table__container__body__box" key={flight.ID}>
                    <td className="table__container__body__box__terminal">
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
                        {flight['airportFromID.city_en']}
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
                          src={flight.airline.en.logoSmallName}
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
  flightsList: filterFlightListSelector(state),
});

export default connect(mapState, mapDispatch)(Flights);
