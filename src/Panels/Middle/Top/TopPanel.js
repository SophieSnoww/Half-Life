import React from 'react';
import BigClock from './BigClock';
import './TopPanel.css';

function TopPanel(props) {
    return (
        <div className="TopPanel middle-panel">
            <BigClock events={props.events} deleteEvent={props.deleteEvent} />
        </div>
    );
}

export default TopPanel;