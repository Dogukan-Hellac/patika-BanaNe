import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './MessageCard.style';

import { formatDistance, parseISO } from "date-fns";
import { tr } from 'date-fns/locale'

const MessageCard = ({ message, onPress }) => {
    const formattedDate = formatDistance(parseISO(message.date), new Date(), {
        addSuffix: true,
        locale: tr,
    })
    const capitalizeFirstLetter = (string) => {
        if (!string) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const newUserName = capitalizeFirstLetter(message.username)

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}>{newUserName}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <Text style={styles.title}>{message.text}</Text>
            <TouchableOpacity style={styles.button_container} onPress={onPress}>
                {!!message.dislike && (
                    <View style={styles.dislike_count_container}>
                        <Text style={styles.dislike_count_text}>{message.dislike}</Text>
                    </View>
                )}
                <Text style={styles.button_text}>bana ne?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MessageCard