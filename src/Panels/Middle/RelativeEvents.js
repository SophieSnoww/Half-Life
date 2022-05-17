import { useState } from 'react';
import update from 'immutability-helper';

function RelativeEvents (props) {
  const [timeModifier, setTimeModifier] = useState({
    years: 1,
    months: 1,
    weeks: 1,
    days: 1,
    hours: 1,
    minutes: 1
  });

  const time = props.time
    .add(timeModifier.years, 'years')
    .add(timeModifier.months, 'months')
    .add(timeModifier.weeks, 'weeks')
    .add(timeModifier.days, 'days')
    .add(timeModifier.hours, 'hours')
    .add(timeModifier.minutes, 'minutes');

  function updateModifier (e) {
    setTimeModifier(update(timeModifier, {
      [e.target.name]: {
        $set: Number(e.target.value)
      }
    }));
  }

  return (
    <div className='relative-event-creation'>
      <div className='relative-time-input-container'>
        <div className='relative-time-text'>Add an event in</div>

        <input name='years' type='number' value={timeModifier.years} onChange={updateModifier} />
        <div className='relative-time-text'>year{timeModifier.years === 1 ? '' : 's'}, </div>

        <input name='months' type='number' value={timeModifier.months} onChange={updateModifier} />
        <div className='relative-time-text'>month{timeModifier.months === 1 ? '' : 's'}, </div>

        <input name='weeks' type='number' value={timeModifier.weeks} onChange={updateModifier} />
        <div className='relative-time-text'>week{timeModifier.weeks === 1 ? '' : 's'}, </div>

        <input name='days' type='number' value={timeModifier.days} onChange={updateModifier} />
        <div className='relative-time-text'>day{timeModifier.days === 1 ? '' : 's'}, </div>

        <input name='hours' type='number' value={timeModifier.hours} onChange={updateModifier} />
        <div className='relative-time-text'>hour{timeModifier.hours === 1 ? '' : 's'}, </div>

        <input name='minutes' type='number' value={timeModifier.minutes} onChange={updateModifier} />
        <div className='relative-time-text'>minute{timeModifier.minutes === 1 ? '' : 's'}, </div>
      </div>

      <div className='relative-time-display'>
        <div className='relative-time'>
          {time.format('hh:mm:ss')}
        </div>
        <div className='relative-date'>
          {time.format('MMMM Do YYYY')}
        </div>
      </div>
    </div>
  );
}

export default RelativeEvents;
