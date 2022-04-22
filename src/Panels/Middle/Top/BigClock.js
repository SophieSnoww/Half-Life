import React from 'react';
import './BigClock.css';
import TimeToggle from './TimeToggle';

class BigClock extends React.Component {
  constructor (props) {
    super(props);

    const isCountdown = JSON.parse(localStorage.getItem('isCountdown'));

    this.state = {
      time: '00:00:00.000',
      date: '01970/01/01',
      isCompleted: false,
      isCountdown
    };
  }

  componentDidMount () {
    setInterval(() => this.clockUpdate(), 11);
  }

  toggleCountdown (value) {
    this.setState({
      isCountdown: value
    }, () => {
      localStorage.setItem('isCountdown', `${value}`);
    });
  }

  clockUpdate () {
    const now = new Date();
    let remainingTime;

    let year;
    let month;
    let day;

    let hour;
    let minute;
    let second;
    let millis;

    let timeString;
    let dateString;

    if (this.state.isCountdown) {
      if (this.props.events.length !== 0) {
        this.setState({
          isCompleted: false
        });

        remainingTime = this.props.events[0].dateMS - now;

        hour = Math.floor(remainingTime / (60 * 60 * 1000));
        minute = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        second = Math.floor((remainingTime % (60 * 1000)) / (1000));
        millis = (remainingTime % (1000));

        if (remainingTime < 0) {
          this.props.deleteEvent();
        }
      } else {
        this.setState({
          isCompleted: true
        });

        remainingTime = '';
      }
    } else {
      year = now.getFullYear();
      month = now.getMonth() + 1;
      day = now.getDate();

      hour = now.getHours();
      minute = now.getMinutes();
      second = now.getSeconds();
      millis = now.getMilliseconds();
    }

    if (year < 10000) {
      year = `0${year}`;
    }

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    if (hour < 10) {
      hour = `0${hour}`;
    }

    if (minute < 10) {
      minute = `0${minute}`;
    }

    if (second < 10) {
      second = `0${second}`;
    }

    if (millis < 10) {
      millis = `00${millis}`;
    } else if (millis < 100) {
      millis = `0${millis}`;
    }

    timeString = `${hour}:${minute}:${second}.${millis}`;
    dateString = `${(this.state.isCountdown) ? `${remainingTime}` : `${year}/${month}/${day}`}`;

    this.setState({
      time: timeString,
      date: dateString
    });
  }

  render () {
    let headerText = 'It is currently:';

    if (this.state.isCountdown) {
      if (this.props.events.length == 0) {
        headerText = '';
      } else {
        headerText = `Time until ${this.props.events[0].name}:`;
      }
    }

    return (
      <div className='BigClock'>
        <TimeToggle toggleCountdown={(value) => this.toggleCountdown(value)} isCountdown={this.state.isCountdown} />
        <div className='clock-header'>{headerText}</div>
        <div className={`actual-clock ${(this.state.isCompleted && this.state.isCountdown) ? 'completed' : ''}`}>{(this.state.isCompleted && this.state.isCountdown) ? ('FINISHED') : (this.state.time)}</div>
        <div className='clock-subtext'>{this.state.date}</div>
      </div>
    );
  }
}

export default BigClock;
