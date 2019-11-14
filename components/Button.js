import React from 'react';

const Button = (props) => {
    return(
        <Button 
            className = {props.className}
            style = {props.style} 
            onPress = {props.action}
            disabled = {props.disabled}
            id={props.id}>
            {props.title} 
        </Button>
    )
}

export default Button;