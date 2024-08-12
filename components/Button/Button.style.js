import { StyleSheet } from "react-native";
import colors from '../../styles/colors';

const base_style = StyleSheet.create({
    container: {
        margin: 10,
        padding: 8,
        alignItems: 'center',
        borderRadius: 5
    },
    title: {
        fontWeight: 'bold',
    }
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.darkgreen,
        },
        title: {
            ...base_style.title,
            color: 'white'
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderWidth: 1.5,
            borderColor: colors.darkgreen
        },
        title: {
            ...base_style.title,
            color: colors.darkgreen
        }
    })
}