import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, options}) => {
  return (
    <div className="form-group margin-top" >
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
        height="100" width="50"
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })
          }
        </select>
      
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
 
  options: PropTypes.arrayOf(PropTypes.string)
};

export default SelectInput;