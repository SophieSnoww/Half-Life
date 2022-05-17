import '../Panels.css';

function LeftPanel (props) {
  const elements = [];

  for (const event of props.events) {
    elements.push(
      <div className='event-container'>
        <div className='event-name'>{event.name}</div>
        <div className='event-date'>
          {event.date.year}/{event.date.month}/{event.date.day} {event.date.hour}:{event.date.minute}
        </div>
      </div>
    );
  }

  return (
    <div className='panel left-panel'>
      {elements}
    </div>
  );
}

export default LeftPanel;
