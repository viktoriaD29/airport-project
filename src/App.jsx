import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Search from './components/Search';
import Flights from './components/Flights';
import FlightButton from './components/FlightButton';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route component={Search} />
        <Route component={FlightButton} />
        <Switch>
          <Route path="/:direction" component={Flights} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

/*
компоненти: конект зі стором - flightList (малює список), 
  search (малює заголовок, інпут, кнопку сьорч і компоненту flightButton, куди передаються два пропса у вигляді двох масивів), 
  flightButton (малює дві кнопки, тобто ссилки на сторінки, компоненти flightList куди передає зі своїх пропсів масиви з відповідними списками)
кнопки мають бути ссилка на сторінки, тобто при кліку на кнопку має відкриватись нова сторінка, яка містить відовідний список
через фільтри відбираємо потрібний список і передаємо компоненті, яка відмальовує його
компонента, яка відмальовує список одна, просто малюється два рази при кліку різних кнопок і передаються різні масиви
шлях через параметри
стан через хуки
фільрація списку через селектор

в сьорч малюємо заголовок, інпут, кнопку
кнопка буде маршрутом і буде відобрати компоненту флайліст з відфільтрованим списком
буде малювати флайбатон

флайбатон буде малювати дві кнопки-маршрути які будуть рендерити флайліст з переданими масивами

флайліст рендерить список який їй передають

відмалювала верстку +++
зробила стор +++
підключила стор
підключила роутер
зробила фільтрацію
підключила квері параметри
*/

