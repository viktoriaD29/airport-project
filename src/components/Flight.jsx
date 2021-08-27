import React from 'react';

const Flight = () => {
  return (
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
                src={el.airline.en.logoName}
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

export default Flight;
