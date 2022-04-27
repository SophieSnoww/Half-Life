import EventsList from './EventsList';
import './RightPanel.css';

function RightPanel (props) {
  return (
    <div className='RightPanel panel side'>
      <div className='panel-title'>Events</div>
      <EventsList events={props.events} deleteEvent={props.deleteEvent} />
    </div>
  );
}

export default RightPanel;
