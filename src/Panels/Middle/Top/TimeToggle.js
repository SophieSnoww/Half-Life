import React from 'react';
import './TimeToggle.css';

function TimeToggle(props) {
    return (
        <div className="TimeToggle">
            <div className={`time-toggle-button ${!props.isCountdown ? "" : "disabled"}`} onClick={() => props.toggleCountdown(false)}>Current Time</div>
            <div className={`time-toggle-button ${props.isCountdown ? "" : "disabled"}`} onClick={() => props.toggleCountdown(true)}>Time Countdown</div>
        </div>
    );
}

export default TimeToggle;