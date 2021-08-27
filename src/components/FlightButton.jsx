import React, {useState} from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import Flight from './Flight'

/*
кожна кнопка є силкою на іншу сторінку з компонентою флайт
шлях до компоненти флайт відповідє переданому масиву

коли вводиш текст він зберігається з параметрах юрл і при кіку на кнопку сьорч малюється та сторінка вже з цим юрл
*/

const FlightButton = () => {
  const [showList, setShowList] = useState(false)
  return (
    <div className="flight__btn">
      <button
        onClick={() => setShowList(true)}
        className="flight__btn-departures"
      >
        <Link to="/flight">DEPARTURES</Link>
      </button>
      <button
        onClick={() => setShowList(true)}
        className="flight__btn-arrivals"
      >
        <Link to="/flight">ARRIVALS</Link>
      </button>
      {/* {showList === true ? <Flight /> : null} */}
    </div>
    // <div className="flight__btn">
    //   <button
    //     onClick={() => setShowList(true)}
    //     className="flight__btn-departures"
    //   >
    //     DEPARTURES
    //   </button>
    //   <button
    //     onClick={() => setShowList(true)}
    //     className="flight__btn-arrivals"
    //   >
    //     ARRIVALS
    //   </button>
    //   {showList === true ? <Flight /> : null}
    // </div>
  );
}

export default FlightButton