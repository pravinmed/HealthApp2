import React, {PropTypes} from 'react';

class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.onChanged = this.onChanged.bind(this);
    }

    onChanged(e) {
        this.props.onChanged(e.target.value);
    }

    render() {

        let {
                id, 
                label, 
                value, 
                placeholder, 
                autoFocus ,
                onChanged
        } = this.props;

        autoFocus = autoFocus || false;

        return (
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <input 
                    className="form-control" 
                    autoFocus={autoFocus}
                    type="text" 
                    id={id}
                    placeholder={placeholder} 
                    defaultValue={value}
                    onChange={this.onChanged} />
            </div>
        );
        
    }
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    onChanged: PropTypes.func.isRequired
};

export default TextInput;