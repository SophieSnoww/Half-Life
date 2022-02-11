import React from 'react';
import './BigClock.css';
import TimeToggle from './TimeToggle';

class BigClock extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: "00:00:00.000",
            date: "01970/01/01",
            isCountdown: false
        }
    }
    
    componentDidMount() {
        setInterval(() => this.clockUpdate(), 11);
    }
    
    clockUpdate() {
        let date = new Date();
        
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let millis = date.getMilliseconds();
        
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
        }
        
        else if (millis < 100) {
            millis = `0${millis}`;
        }
        
        this.setState({
            time: `${hour}:${minute}:${second}.${millis}`,
            date: `${year}/${month}/${day}`
        });
    }
    
    render() {
        return (
            <div className="BigClock">
                <TimeToggle />
                <div className="clock-header">It is currently:</div>
                <div className="actual-clock">{this.state.time}</div>
                <div className="clock-subtext">{this.state.date}</div>
            </div>
        );
    }
}

export default BigClock;