import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: colors.darkgreen,
        borderRadius: 10
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    user: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    date: {
        color: 'white',
        fontStyle: 'italic'
    },
    title: {
        color: 'white',
        fontSize: 15
    },
    button_container: {
        backgroundColor: 'white',
        padding: 3,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    button_text: {
        fontWeight: 'bold',
        color: colors.darkgreen
    },
    dislike_count_container: {
        backgroundColor: colors.darkgreen,
        padding: 3,
        marginRight: 3,
        borderRadius: 50
    },
    dislike_count_text: {
        color: 'white',
        fontWeight: 'bold'
    },
})