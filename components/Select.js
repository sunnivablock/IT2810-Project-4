import React from 'react';

const Select = (props) => {
    return(
        <View /*className="form-group"*/>
            <Text htmlFor={props.name}> {props.title} </Text>
            <select
              id={props.name}
              name={props.name}
              value={props.value}
              onChange={props.handleChange}
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
              })}
            </select>
      </View>)
}

export default Select;