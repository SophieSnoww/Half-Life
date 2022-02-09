import React from 'react';
import './MiddlePanel.css';

import TopPanel from './Top/TopPanel';
import BottomPanel from './Bottom/BottomPanel';

class MiddlePanel extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="MiddlePanel panel">
                <TopPanel />
                <BottomPanel />
            </div>
        );
    }
}

export default MiddlePanel;