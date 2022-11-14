import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({
    placeholder,
    onChangeText,
    value,
    autoCapitalize,
    onBlur,
    secureTextEntry = false
}) => {
    return (
        <TextInput
            autoCapitalize={autoCapitalize}
            style={styles.container}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor="#a9a9a9"
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: "#FFF",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        color: "#000000",
    }
})
export default Input;