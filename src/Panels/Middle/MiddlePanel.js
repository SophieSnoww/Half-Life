import '../Panels.css';
import EventCreation from './EventCreation';

function MiddlePanel (props) {
  return (
    <div className='panel middle-panel'>
      <div className='time'>
        {props.time.format('hh:mm:ss.SSS')}
      </div>
      <EventCreation />
    </div>
  );
}

export default MiddlePanel;
