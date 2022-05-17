import '../Panels.css';
import EventCreation from './EventCreation';
import moment from 'moment';

function MiddlePanel (props) {
  let isEvent = false;
  let event;
  let eventMoment;
  // let diff;
  let diffMoment;
  // let currentMS;
  // let eventMS;

  let diffHours;
  let diffMinutes;
  let diffSeconds;
  let diffMilliseconds;

  if (props.events.length > 0) {
    event = props.events[0];
    eventMoment = moment(
      `${event.date.hour}:${event.date.minute}, on ${event.date.day} ${event.date.month}, ${event.date.year}`,
      'hh:mm, on DD MMMM YYYY'
    );
    isEvent = true;

    diffMoment = moment.duration(eventMoment.diff(props.time));
    diffHours = diffMoment.hours();
    diffMinutes = diffMoment.minutes();
    diffSeconds = diffMoment.seconds();
    diffMilliseconds = diffMoment.milliseconds();

    if (diffHours < 10) {
      diffHours = `0${diffHours}`;
    }

    if (diffMinutes < 10) {
      diffMinutes = `0${diffMinutes}`;
    }

    if (diffSeconds < 10) {
      diffSeconds = `0${diffSeconds}`;
    }

    if (diffMilliseconds < 10) {
      diffMilliseconds = `00${diffMilliseconds}`;
    } else if (diffMilliseconds < 100) {
      diffMilliseconds = `0${diffMilliseconds}`;
    }
  }

  return (
    <div className='panel middle-panel'>
      <div className='time-container'>
        <div className='time'>
          {props.time.format('hh:mm:ss.SSS')}
        </div>
        <div className='date'>
          {props.time.format('MMMM Do YYYY')}
        </div>
        <div className='countdown'>
          {isEvent
            ? (`${diffHours}:${diffMinutes}:${diffSeconds}.${diffMilliseconds}`)
            // ? diffMoment
            : ''}
        </div>
      </div>
      <EventCreation time={props.time} events={props.events} setEvents={props.setEvents} />
    </div>
  );
}

export default MiddlePanel;
