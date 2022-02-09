import React from 'react';
import './RepeatInput.css';

class RepeatInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.repeatEveryValues = [
            "hour",
            "day",
            "week",
            "month",
            "year"
        ];
        
        this.state = {
            repeatEvery: 1,
            repeatEveryIndex: 1,
        }
    }
    
    cycleRepeatEveryIndex() {
        let index = this.state.repeatEveryIndex;
        
        if (index + 1 > this.repeatEveryValues.length - 1) {
            index = 0;
        }
        else {
            index += 1;
        }
        
        this.setState({
            repeatEveryIndex: index
        });
    }
    
    handleChange(input, event) {
        if (input === "repeat-every") {
            this.setState({
                repeatEvery: Number(event.target.value)
            });
        }
    }
    
    render() {
        let style = {
            opacity: 1
        }
        
        if (this.props.disabled) {
            style.opacity = 0;
        }
        
        let max = 1;
        
        switch (this.repeatEveryValues[this.state.repeatEveryIndex]) {
            case ("hour"):
                max = 24;
                break;
            case ("day"):
                max = 6;
                break;
            case ("week"):
                max = 4;
                break;
            case ("month"):
                max = 12;
        }
        
        return (
            <div className="RepeatInput" style={style}>
                Repeat every
                <input className="relative-input-input" type="number" placeholder="1" min="1" step="1" value={this.state.repeatEvery} onChange={(event) => this.handleChange("repeat-every", event)} />
                <span className="repeat-input-every" onClick={() => this.cycleRepeatEveryIndex()}>{this.repeatEveryValues[this.state.repeatEveryIndex]}{this.state.repeatEvery > 1 ? "s" : ""}</span>
            </div>
        );
    }
}

export default RepeatInput;