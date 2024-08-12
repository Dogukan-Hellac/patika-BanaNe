import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import MessageCard from '../../components/MessageCard'
import styles from './Messages.style'
import ContentInputModal from '../../components/modal/ContentInput'
import { getDatabase, ref, push, onValue, update, remove } from "firebase/database";
import { getAuth } from "firebase/auth";
import parseContentData from '../../utils/parseContentData'

export default function Messages() {
    const [inputModalVisible, setInputModalVisible] = useState(false)
    const [contentList, setContentList] = useState([])

    const db = getDatabase()

    useEffect(() => {
        onValue(ref(db, 'messages/'),
            (snapshot) => {
                const contentData = snapshot.val()

                const parsedData = parseContentData(contentData || {})
                setContentList(parsedData)
            }
        )
    }, [])

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible)
    }

    function handleSendContent(content) {
        handleInputToggle()
        sendContent(content)
    }

    function sendContent(content) {
        const userMail = getAuth().currentUser.email

        const contentObj = {
            text: content,
            username: userMail.split('@')[0],
            date: (new Date()).toISOString(),
            dislike: 0
        }

        push(ref(db, 'messages/'), contentObj)
    }

    function handleBanane(item) {
        const updates = {};
        updates[`messages/${item.id}/dislike`] = item.dislike + 1
        update(ref(db), updates)
    }

    const renderContent = ({ item }) => <MessageCard message={item} onPress={() => handleBanane(item)} />

    function handleClear(){
        remove(ref(db, 'messages/'))
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={contentList}
                renderItem={renderContent}
            />

            <FloatingButton onPress={handleInputToggle} />
            {getAuth().currentUser.email === 'dogukan@gmail.com' &&
                <TouchableOpacity style={styles.button_container} onPress={handleClear}>
                    <Text style={styles.button_text}>Temizle</Text>
                </TouchableOpacity>
            }

            <ContentInputModal
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent}
            />
        </View>
    )
}

