import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    button_container: {
        position: 'absolute',
        backgroundColor: 'white',
        padding: 20,
        bottom: 20,
        left: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.darkgreen
    },
    button_text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.darkgreen
    }
})