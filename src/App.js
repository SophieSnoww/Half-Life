import React from 'react';
import './App.css';

import LeftPanel from './Panels/Left/LeftPanel';
import MiddlePanel from './Panels/Middle/MiddlePanel';
import RightPanel from './Panels/Right/RightPanel';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="App">
                <img className="main-logo" src="logo.png" alt="Half-Life logo" />
                <LeftPanel />
                <MiddlePanel />
                <RightPanel />
            </div>
        );
    }
}

export default App;