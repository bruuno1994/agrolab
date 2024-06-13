import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#71A621'

    },
    containerHeader: {
        marginTop: '15%',
        marginBottom: '15%',
        paddingStart: "10%"
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'


    },
    title: {
        fontSize: 20,
        marginTop: 20,

    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,

    },
    button: {
        backgroundColor: '#022601',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'


    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonCadastro: {
        backgroundColor: '#022601',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonCad: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'

    }
});