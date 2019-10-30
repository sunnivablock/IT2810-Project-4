import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Input
  } from 'react-native';

const Input1 = (props) => {
    return (  
        <View className="form-group">
            <Text htmlFor={props.name} className="form-label">{props.title}
            </Text>
            <Input
            className={props.className}
            id={props.name}
            name={props.name}
            type={props.type}
            maxLength={props.maxLength}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder} 
            />
        </View>
    )
}

/*Source: https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y*/

export default Input1;