import React from "react";
import { View, TextInput } from "react-native";
import styles from './Input.style';


const Input = ({ placeholder, onType, value, isSecure=false }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onType}
                value={value}
                secureTextEntry={isSecure}
            />
        </View>
    )
}

export default Input