import moment from 'moment';
import { useEffect, useState } from 'react';
import './App.css';
import LeftPanel from './Panels/Left/LeftPanel';
import MiddlePanel from './Panels/Middle/MiddlePanel';
import RightPanel from './Panels/Right/RightPanel';

function App (props) {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    setInterval(() => {
      setTime(moment());
    }, 10);
  }, []);

  return (
    <div className='app'>
      {/* {time.format('h:mm:ss.SSS a')} */}
      <LeftPanel />
      <MiddlePanel time={time} />
      <RightPanel />
    </div>
  );
}

export default App;
