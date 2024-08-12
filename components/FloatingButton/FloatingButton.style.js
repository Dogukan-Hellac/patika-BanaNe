import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkgreen,
        borderWidth: 2,
        borderColor: 'white'
    },
    icon: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    }
})