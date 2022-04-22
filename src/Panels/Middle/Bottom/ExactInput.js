import React from 'react';
import './ExactInput.css';
import RepeatInput from './RepeatInput';

class ExactInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: 'Name',
      days: 1,
      hours: 0,
      minutes: 0,
      repeat: false
    };
  }

  handleChange (event) {
    const name = event.target.name;
    let value = event.target.value;

    if (!isNaN(Number(value)) && value !== '') {
      value = Number(value);

      if (value < 0) {
        value = Math.abs(value);
      }
    }

    if (value === 'on') {
      value = event.target.checked;
    }

    this.setState({
      [name]: value
    });
  }

  addEvent () {
    this.props.addEvent(this.state);
    this.setState({
      name: 'Name',
      days: 1,
      hours: 0,
      minutes: 0,
      repeat: false
    });
  }

  render () {
    return (
      <div className='ExactInput bottom-input'>
        <div className='relative-input-text'>
          Add an event called
          {/* Event name */}
          <input name='name' className='relative-input-input text' placeholder='Name' value={this.state.name} onChange={(event) => this.handleChange(event)} />
          <br />

          on
          {/* Days */}
          <input name='days' className='relative-input-input' type='number' placeholder='0' value={this.state.days} onChange={(event) => this.handleChange(event)} min='0' step='1' />

          {/* Hours */}
          <input name='hours' className='relative-input-input' type='number' placeholder='0' value={this.state.hours} onChange={(event) => this.handleChange(event)} min='0' max='23' step='1' />

          {/* Minutes */}
          <input name='minutes' className='relative-input-input' type='number' placeholder='0' value={this.state.minutes} onChange={(event) => this.handleChange(event)} min='0' max='59' step='1' />
        </div>

        <div className='relative-input-repeat-toggle'>
          <input name='repeat' type='checkbox' className='relative-input-repeat-toggle-box' checked={this.state.repeat} onChange={(event) => this.handleChange(event)} />
          Repeat
        </div>

        <RepeatInput disabled={!this.state.repeat} />

        <div className='add-relative-input-button' onClick={() => this.addEvent()}>Add</div>
      </div>
    );
  }
}

export default ExactInput;
