import { useState } from 'react';
import update from 'immutability-helper';
import moment from 'moment';

function ExactEvents (props) {
  const [date, setDate] = useState({
    year: props.time.format('YYYY'),
    month: props.time.format('MMMM').toLowerCase(),
    day: props.time.format('D'),
    hour: props.time.format('HH'),
    minute: props.time.format('mm')
  });

  const [eventName, setEventName] = useState('Event');

  function updateDate (e) {
    if (e.target.value === '') return;

    setDate(update(date, {
      [e.target.name]: {
        $set: e.target.value
      }
    }));
  }

  function createEvent (e) {
    props.setEvents(update(props.events, {
      $push: [{
        name: eventName,
        date
      }]
    }));

    const time = moment();

    setDate({
      year: Number(time.format('YYYY')),
      month: time.format('MMMM').toLowerCase(),
      day: Number(time.format('D')),
      hour: Number(time.format('H')),
      minute: Number(time.format('m'))
    });

    setEventName('Event');
  }

  return (
    <div className='exact-event-creation'>
      <div className='exact-event-container'>
        <div className='exact-event-text'>Add an event on</div>
        <select name='month' value={date.month} onChange={updateDate}>
          <option value='january'>January</option>
          <option value='febuary'>Febuary</option>
          <option value='march'>March</option>
          <option value='april'>April</option>
          <option value='may'>May</option>
          <option value='june'>June</option>
          <option value='july'>July</option>
          <option value='august'>August</option>
          <option value='september'>September</option>
          <option value='october'>October</option>
          <option value='november'>November</option>
          <option value='december'>December</option>
        </select>

        <input type='number' name='day' value={date.day} onChange={updateDate} />
        <div className='exact-event-text'>,</div>
        <input type='number' name='year' value={date.year} onChange={updateDate} />
        <div className='exact-event-text'>,</div>

        <div className='flex-break' />

        <div className='exact-event-text'>at</div>
        <input type='number' name='hour' value={date.hour} onChange={updateDate} />
        <div className='exact-event-text'>:</div>
        <input type='number' name='minute' value={date.minute} onChange={updateDate} />

        <div className='flex-break' />

        <div className='exact-event-text'>called</div>
        <input type='text' name='eventName' value={eventName} onChange={(e) => setEventName(e.target.value)} />
      </div>

      <div className='exact-event-button' onClick={createEvent}>
        Add event
      </div>
    </div>
  );
}

export default ExactEvents;
