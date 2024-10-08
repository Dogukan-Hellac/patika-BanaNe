import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './FloatingButton.style'

export default function FloatingButton({onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    )
}