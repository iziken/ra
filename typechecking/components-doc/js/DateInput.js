'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: (props, propName, componentName) => {
    const value = props[propName];
    if(!(/\d{4}-\d{2}-\d{2}/).test(value)) {
      throw new Error(`Invalid props ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
    }
  },
  required: PropTypes.bool,
};

DateInput.defaultProps = {
  value: Date.now()
}
