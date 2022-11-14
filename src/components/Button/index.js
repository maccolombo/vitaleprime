import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '~/styles/Colors';

// import { Container } from './styles';

const Button = ({
    label,
    onPress,
    width
}) => {
    return (
        <TouchableOpacity
            
            onPress={onPress}
            style={{
                width: width,
                margin: 15,
                padding: 10,
                borderRadius: 7,
                alignItems: 'center',
                alignSelf: "center",
                backgroundColor: Colors.ok_button
            }}
        >

            <Text style={{
                color: "#FFF",
                fontWeight: 'bold'
            }}>{label}</Text>

        </TouchableOpacity>
    );
}

export default Button;