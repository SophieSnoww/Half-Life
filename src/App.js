import moment from 'moment';
import { useEffect, useState } from 'react';
import './App.css';
import LeftPanel from './Panels/Left/LeftPanel';
import MiddlePanel from './Panels/Middle/MiddlePanel';
import RightPanel from './Panels/Right/RightPanel';

function App (props) {
  const [time, setTime] = useState(moment());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setTime(moment());
    }, 10);
  }, []);

  return (
    <div className='app'>
      <LeftPanel events={events} setEvents={setEvents} />
      <MiddlePanel time={time} events={events} setEvents={setEvents} />
      <RightPanel />
    </div>
  );
}

export default App;
