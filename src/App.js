import React from 'react';
import './App.css';

import LeftPanel from './Panels/Left/LeftPanel';
import MiddlePanel from './Panels/Middle/MiddlePanel';
import RightPanel from './Panels/Right/RightPanel';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        let data = {
            events: []
        }
        
        if (localStorage.getItem("data")) {
            data = JSON.parse(localStorage.getItem("data"));
            
            let events = data.events;
            let outputEvents = [];
            
            for (let event of events) {
                event.dateObject = new Date(event.dateMS);
                
                if (!(event.dateMS < new Date().getTime())) {
                    let placed = false;
                    for (let i = 0; i < outputEvents.length; i++) {
                        if (event.dateMS < outputEvents[i].dateMS) {
                            outputEvents.splice(i, 0, event);
                            placed = true;
                            break;
                        }
                    }
                    
                    if (!placed) {
                        outputEvents.push(event);
                    }
                }
            }
            
            data.events = outputEvents;
        }
        
        this.state = data;
    }
    
    addEvent(state) {
        let events = this.state.events;
        
        let dateObject = new Date();
        let dateMS = dateObject.getTime();
        
        dateMS += (state.minutes * 60 * 1000);
        dateMS += (state.hours * 60 * 60 * 1000);
        dateMS += (state.days * 24 * 60 * 60 * 1000);
        
        dateObject = new Date(dateMS);
        
        events.push({
            name: state.name,
            dateMS,
            dateObject
        });
        
        let outputEvents = [];
            
        for (let event of events) {
            if (!(event.dateMS < new Date().getTime())) {
                let placed = false;
                for (let i = 0; i < outputEvents.length; i++) {
                    if (event.dateMS < outputEvents[i].dateMS) {
                        outputEvents.splice(i, 0, event);
                        placed = true;
                        break;
                    }
                }
                
                if (!placed) {
                    outputEvents.push(event);
                }
            }
        }
        
        events = outputEvents;
        
        this.setState({
            events
        }, () => {
            localStorage.setItem("data", JSON.stringify(this.state));
        });
    }
    
    deleteEvent(index) {
        let events = this.state.events;
        
        events.splice(index, 1);
        
        this.setState({
            events
        }, () => {
            localStorage.setItem("data", JSON.stringify(this.state));
        });
    }
    
    render() {
        return (
            <div className="App">
                <img className="main-logo" src="logo.png" alt="Half-Life logo" />
                <LeftPanel />
                <MiddlePanel events={this.state.events} addEvent={(state) => this.addEvent(state)} deleteEvent={() => this.deleteEvent(0)} />
                <RightPanel events={this.state.events} deleteEvent={(index) => this.deleteEvent(index)} />
            </div>
        );
    }
}

export default App;