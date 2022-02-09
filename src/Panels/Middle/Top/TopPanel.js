import React from 'react';
import BigClock from './BigClock';
import './TopPanel.css';

class TopPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="TopPanel middle-panel">
                <BigClock />
            </div>
        );
    }
}

export default TopPanel;