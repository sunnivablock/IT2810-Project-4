import React from 'react';

const Picker = (props) => {
    return(
        <Picker
          id={props.name}
          name={props.name}
          value={props.value}
          onValueChange={props.handleChange}
          className={props.className}
          >
          <option value="" disabled>{props.placeholder}</option>
          {props.options.map(option => {
            return (
              <option
                key={option}
                value={option}
                label={option}>{option}
              </option>
            );
          }
          )}
        </Picker>
    )
}

export default Picker;