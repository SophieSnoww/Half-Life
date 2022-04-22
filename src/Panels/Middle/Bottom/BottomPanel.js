import React from 'react';
import './BottomPanel.css';
import ExactInput from './ExactInput';
import InputTypeToggle from './InputTypeToggle';
import RelativeInput from './RelativeInput';

class BottomPanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      inputType: 'relative'
    };
  }

  changeInputType (type) {
    this.setState({
      inputType: type
    });
  }

  render () {
    return (
      <div className='BottomPanel middle-panel'>
        <InputTypeToggle changeInputType={(type) => this.changeInputType(type)} inputType={this.state.inputType} />
        {this.state.inputType === 'relative'
          ? <RelativeInput addEvent={this.props.addEvent} />
          : <ExactInput addEvent={this.props.addEvent} />}
      </div>
    );
  }
}

export default BottomPanel;
