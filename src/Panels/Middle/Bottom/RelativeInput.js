import React from 'react';
import './RelativeInput.css';
import RepeatInput from './RepeatInput';

class RelativeInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "Name",
            days: 1,
            hours: 0,
            minutes: 0,
            repeat: false
        };
    }
    
    handleChange(input, event) {
        if (input === "name") {
            this.setState({
                name: event.target.value
            });
        }
        if (input === "days") {
            this.setState({
                days: Number(event.target.value)
            });
        }
        if (input === "hours") {
            this.setState({
                hours: Number(event.target.value)
            });
        }
        if (input === "minutes") {
            this.setState({
                minutes: Number(event.target.value)
            });
        }
        if (input === "repeat") {
            this.setState({
                repeat: event.target.checked
            });
        }
    }
    
    addEvent() {}
    
    render() {
        return (
            <div className="RelativeInput bottom-input">
                <div className="relative-input-text">
                    Add an event called
                    <input className="relative-input-input text" placeholder="Name" value={this.state.name} onChange={(event) => this.handleChange("name", event)} />
                    <br />
                    <br />
                    in
                    <input className="relative-input-input" type="number" placeholder="0" value={this.state.days} onChange={(event) => this.handleChange("days", event)} min="0" step="1" />
                    days,
                    <input className="relative-input-input" type="number" placeholder="0" value={this.state.hours} onChange={(event) => this.handleChange("hours", event)} min="0" max="23" step="1" />
                    hours,
                    <input className="relative-input-input" type="number" placeholder="0" value={this.state.minutes} onChange={(event) => this.handleChange("minutes", event)} min="0" max="59" step="1" />
                    minutes
                </div>
                
                <div className="relative-input-repeat-toggle">
                    <input type="checkbox" className="relative-input-repeat-toggle-box" value={this.state.repeat} onChange={(event) => this.handleChange("repeat", event)} />
                    Repeat
                </div>
                
                <RepeatInput disabled={!this.state.repeat} />
                
                <div className="add-relative-input-button" onClick={this.addEvent}>Add</div>
            </div>
        );
    }
}

export default RelativeInput;