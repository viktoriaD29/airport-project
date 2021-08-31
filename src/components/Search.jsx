import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';

const Search = ({match}) => {
  console.log(match) //undefined
  
  // {`?search=${value}`}

  // const { search } = useLocation();
  // const querySearch = qs.parse(search, { ignoreQueryPrefix: true }).search;

  // const queryParams = querySearch ? querySearch : '';

  const [value, setValue] = useState('');

  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  // const { pathname } = useLocation();

  // let path =
  //   pathname === '/departures'
  //     ? `/departures?search=${value}`
  //     : `/arrivals?search=${value}`;

  return (
    <div className="search">
      <h2 className="search__title">SEARCH FLIGHT</h2>
      <div className="search__container">
        <form className="search__form">
          {/* <i className="fas fa-search"></i> */}
          <input
            className="search__input"
            type="text"
            placeholder="Airline, destination or flight #"
            onChange={onChange}
            value={value}
          />
          <Link to={`?search=${value}`}>
            <button className="search__btn" type="submit">
              Search
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Search;

// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import ArrivalsList from './ArrivalsList';
// import DeparturesList from './DeparturesList';
// import FilterDeparturesList from './FilterDeparturesList';
// import * as flightAction from '../flights/flight.actions';
// import {
//   flightSelectorDepartures,
//   flightSelectorArrivals,
//   flightTextSelector,
//   filterFlightDepatrures,
// } from '../flights/flight.selectors';

// const Search = ({
//   flightDepartures,
//   flightArrivals,
//   getFlightData,
//   filterFlightDepartures,
// }) => {
//   const [flightInfoDep, setFlightInfoDep] = useState(false);
//   const [flightInfoArr, setFlightInfoArr] = useState(false);
//   const [filterDepList, setFilterDepList] = useState(false);
//   const [value, setValue] = useState('');

//   const flightInfoDepartures = () => setFlightInfoDep(!flightInfoDep);

//   const flightInfoArrivals = () => setFlightInfoArr(!flightInfoArr);

//   const filterDeparturesList = () => setFilterDepList(true);

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     flightAction.flightTextAction(value);
//   };

//   useEffect(() => {
//     getFlightData();
//   }, []);

//   return (
// <>
//   <div className="search">
//     <h2 className="title">SEARCH FLIGHT</h2>
//     <div className="search__container">
//       <form onSubmit={(e) => handleOnSubmit(e)} className="search__form">
//         {/* <i className="fas fa-search"></i> */}
//         <input
//           onChange={(e) => setValue(e.target.value)}
//           className="search__input"
//           type="text"
//           placeholder="Airline, destination or flight #"
//           value={value}
//         />
//         <button
//           onClick={() => filterDeparturesList()}
//           className="search__btn"
//           type="submit"
//         >
//           Search
//         </button>
//     </form>
//   </div>
// </div>
// <div className="flight__btn">
//   <button
//     onClick={() => flightInfoDepartures()}
//     className="flight__btn-departures"
//   >
//     DEPARTURES
//   </button>
//   {flightInfoDep === true ? (
//     <DeparturesList flightDepartures={flightDepartures} />
//   ) : null}
//   {filterDepList === true ? (
//     <FilterDeparturesList
//       filterFlightDepartures={filterFlightDepartures}
//     />
//   ) : null}

//   <button
//     onClick={() => flightInfoArrivals()}
//     className="flight__btn-arrivals"
//   >
//     ARRIVALS
//   </button>
//   {flightInfoArr === true ? (
//     <ArrivalsList flightArrivals={flightArrivals} />
//   ) : null}
// </div>
//     </>
//   );
// };

// const mapState = (state) => {
//   return {
//     flightDepartures: flightSelectorDepartures(state),
//     flightArrivals: flightSelectorArrivals(state),
//     filterFlightDepartures: filterFlightDepatrures(state),
//     filterFlightText: flightTextSelector(state),
//   };
// };

// const mapDispatch = {
//   getFlightData: flightAction.getFlightData,
// };

// export default connect(mapState, mapDispatch)(Search);

// {
//   /* <span data-v-793d4c91="" className="icon-flight">
//   <svg
//     data-v-793d4c91=""
//     width="40px"
//     height="28px"
//     viewBox="0 0 40 28"
//     version="1.1"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g
//       data-v-793d4c91=""
//       id="Page-1"
//       stroke="none"
//       stroke-width="1"
//       fill="none"
//       fill-rule="evenodd"
//     >
//       <g
//         data-v-793d4c91=""
//         id="Path-403"
//         transform="translate(-1.000000, -1.000000)"
//         fill="#FFFFFF"
//         fill-rule="nonzero"
//       >
//         <g data-v-793d4c91="" id="Group">
//           <path
//             data-v-793d4c91=""
//             d="M40.9190312,14.2925525 C40.731055,13.5210761 40.2396434,12.8581323 39.5561585,12.4539552 C38.8726735,12.0497781 38.0549837,11.9385881 37.2883912,12.1455827 L26.8096581,15.0218819 L13.1945082,2 L9.38678826,3.03046545 L17.5564785,17.5510243 L7.75204986,20.2442408 L3.86129243,17.1278331 L1,17.9171897 L4.59162231,24.3200818 L6.11030829,27.0112974 L9.26373268,26.1409043 L19.7414654,23.2656055 L28.3253427,20.9165445 L38.8070772,18.0372439 C40.4055057,17.5625364 41.3397513,15.9060318 40.9190312,14.2925525 Z"
//             id="Path_403"
//             transform="translate(21.009879, 14.505649) rotate(-4.012171) translate(-21.009879, -14.505649) "
//           ></path>
//         </g>
//       </g>
//     </g>
//   </svg>
// </span>; */
// }

// //  <svg
// //         className="icon-flight"
// //         data-v-793d4c91=""
// //         width="40px"
// //         height="28px"
// //         viewBox="0 0 40 28"
// //         version="1.1"
// //         xmlns="http://www.w3.org/2000/svg"
// //       >
// //         <g
// //           data-v-793d4c91=""
// //           id="Page-1"
// //           stroke="none"
// //           stroke-width="1"
// //           fill="none"
// //           fill-rule="evenodd"
// //         >
// //           <g
// //             data-v-793d4c91=""
// //             id="Group"
// //             transform="translate(-4.000000, -7.000000)"
// //           >
// //             <g data-v-793d4c91="" id="Path-402"></g>
// //             <path
// //               data-v-793d4c91=""
// //               d="M43.8940167,20.2848496 C43.7061583,19.5138567 43.2150547,18.8513283 42.531998,18.4474045 C41.8489414,18.0434806 41.031764,17.9323603 40.2656518,18.1392252 L29.793485,21.013722 L16.1868667,8 L12.3815328,9.02981973 L20.5461037,23.5412796 L10.7478188,26.2328084 L6.85949946,23.1183536 L4,23.9072155 L7.5893717,30.3060954 L9.10710602,32.9956246 L12.2585544,32.1257769 L22.7297214,29.2522799 L31.3082198,26.9046908 L41.7833862,24.0271945 C43.3808131,23.5527844 44.3144732,21.8973179 43.8940167,20.2848496 Z"
// //               id="Path_402"
// //               fill="#FFFFFF"
// //               fill-rule="nonzero"
// //               transform="translate(23.997341, 20.497812) rotate(27.974730) translate(-23.997341, -20.497812) "
// //             ></path>
// //           </g>
// //         </g>
// //       </svg>{' '}
