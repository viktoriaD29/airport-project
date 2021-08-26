import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Search from './components/Search';

const App = () => {
  return (
    <Provider store={store}>
      <Search></Search>
    </Provider>
  );
};

export default App;

/*
компоненти: flightList (малює список), 
  конект зі стором - search (малює заголовок, інпут, кнопку сьорч і компоненту flightButton, куди передаються два пропса у вигляді двох масивів), 
  flightButton (малює дві кнопки, тобто ссилки на сторінки, компоненти flightList куди передає зі своїх пропсів масиви з відповідними списками)
кнопки мають бути ссилка на сторінки, тобто при кліку на кнопку має відкриватись нова сторінка, яка містить відовідний список
через фільтри відбираємо потрібний список і передаємо компоненті, яка відмальовує його
компонента, яка відмальовує список одна, просто малюється два рази при кліку різних кнопок і передаються різні масиви
шлях через параметри
стан через хуки
фільрація списку через селектор

в сьорч малюємо заголовок, інпут, кнопку
кнопка буде маршрутом і буде відобрати компоненту флайліст з переданим
*/

// import React from 'react';
// import moment from 'moment';

// const ArrivalsList = ({ flightArrivals }) => {
//   return (
//     <main>
//       <ul className="flights__list">
//         {flightArrivals.map((el) => (
//           <li className="flight" key={el.ID}>
//             <span className="flight__terminal">{el.term}</span>
//             <span className="flight__local-time">
//               {moment(el.timeBoard).format('hh:mm')}
//             </span>
//             <span className="flight__destination">
//               {el['airportToID.city_en']}
//             </span>
//             <span className="flight__status">{`Landed ${moment(
//               el.timeDepFact
//             ).format('hh:mm')}`}</span>
//             <span className="flight__airline">
//               <img
//                 className="flight__airline-logo"
//                 src={el.airline.en.logoName}
//                 alt="Logo"
//               />
//               {el.airline.en.name}
//             </span>
//             <span className="flight__airline-flight">
//               {el.codeShareData[0].codeShare}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default ArrivalsList;
