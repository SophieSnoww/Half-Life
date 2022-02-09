import React from 'react';
import './TimeToggle.css';

class TimeToggle extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="TimeToggle">
                <div className="time-toggle-button">Current Time</div>
                <div className="time-toggle-button disabled">Time Countdown</div>
            </div>
        );
    }
}

export default TimeToggle;