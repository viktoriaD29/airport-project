import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import * as flightAction from '../flights/flight.actions';
//import { getFlightData } from '../flights/flight.actions';
import {
  flightSelectorList,
  flightTextSelector,
  filteredFlightsListSelector,
} from '../flights/flight.selectors';
import qs from 'qs';

const Flights = (flightsList, getFlightData, getFlightText) => {
  const { direction } = useParams();
  const { search } = useLocation();
  const querySearch = qs.parse(search, { ignoreQueryPrefix: true }).search;

  useEffect(() => {
    getFlightData(direction);
  }, [direction]);

  useEffect(() => {
    getFlightText(querySearch);
  }, [querySearch]);

  return flightsList.length === 0 ? (
    <h2 className="no-flights">No flights</h2>
  ) : (
    <>
      {console.log('hello')}
      <table className="flight__table">
        <thead>
          <tr>
            <th>
              <span>Terminal</span>
            </th>
            <th>
              <span>Local time</span>
            </th>
            <th>
              <span>Destination</span>
            </th>
            <th>
              <span>Status</span>
            </th>
            <th>
              <span>Airline</span>
            </th>
            <th>
              <span>Flight</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="flight__terminal"></span>
            </td>
            <td>
              <span className="flight__local-time"></span>
            </td>
            <td>
              <span className="flight__destination"></span>
            </td>
            <td>
              <span className="flight__status"></span>
            </td>
            <td>
              <span className="flight__airline">
                <img
                  className="flight__airline-logo"
                  // src={el.airline.en.logoName}
                  alt="Logo"
                />
              </span>
            </td>
            <td>
              <span className="flight__airline-flight"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const mapState = (state) => {
  return {
    flightsList: filteredFlightsListSelector(state),
    flightText: flightTextSelector(state),
  };
};

const mapDispatch = {
  getFlightData: flightAction.getFlightData,
  getFlightText: flightAction.flightTextAction,
};

export default connect(mapState, mapDispatch)(Flights);
