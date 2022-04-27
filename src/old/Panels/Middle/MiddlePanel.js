import './MiddlePanel.css';

import TopPanel from './Top/TopPanel';
import BottomPanel from './Bottom/BottomPanel';

function MiddlePanel (props) {
  return (
    <div className='MiddlePanel panel'>
      <TopPanel events={props.events} deleteEvent={props.deleteEvent} />
      <BottomPanel addEvent={props.addEvent} />
    </div>
  );
}

export default MiddlePanel;
