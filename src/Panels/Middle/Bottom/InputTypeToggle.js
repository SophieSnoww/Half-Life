import './InputTypeToggle.css';

function InputTypeToggle (props) {
  return (
    <div className='InputTypeToggle'>
      <div className={`input-type-toggle-button${props.inputType === 'relative' ? '' : ' disabled'}`} onClick={() => props.changeInputType('relative')}>Relative Time</div>
      <div className={`input-type-toggle-button${props.inputType === 'exact' ? '' : ' disabled'}`} onClick={() => props.changeInputType('exact')}>Exact Date</div>
    </div>
  );
}

export default InputTypeToggle;
