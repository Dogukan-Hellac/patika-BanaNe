import React, { useState } from "react";
import { View, TextInput, } from 'react-native';
import styles from './ContentInput.style';
import Button from "../../Button";
import Modal from "react-native-modal";

const ContentInputModal = ({ visible, onClose, onSend }) => {
    const [text, setText] = useState(null)

    function handleSend() {
        if (!text) {
            return
        }

        onSend(text)
        setText('')
    }

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder="Darla hadi milleti..."
                        onChangeText={setText}
                        multiline
                    />
                </View>
                <Button title="Gönder" onPress={handleSend} />
            </View>
        </Modal>
    )
}

export default ContentInputModal