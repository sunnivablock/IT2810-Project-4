import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

const InputField = (props) => {
    return (  
        <TextInput
        className={props.className}
        id={props.name}
        name={props.name}
        allowFontScaling={true} 
        type={props.type}
        maxLength={props.maxLength}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder} 
        />
    )
}

export default InputField;