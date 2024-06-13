import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // cor de fundo para a tela inteira
    },
    containerLogo: {
        width: '100%', // largura total da tela horizontalmente
        backgroundColor: '#D7D9D7', 
        padding: 4,
    },
    logo: {
        width: 50, // largura
        height: 50, // altura
    },

    titleAmostra: {
        backgroundColor: 'white', // cor de fundo para o título
        paddingVertical: 10, // espaçamento vertical
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#6495ED',
        marginBottom: 20, // margem inferior
        
    },

    textAmostra: {
        fontSize: 18, // tamanho do texto aumentado
        fontWeight: 'bold', // texto em negrito
        color: '#6495ED',
    },
    containerMenu: {
        borderWidth: 2,
        borderColor: '#022601',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 'auto',
        
    },
    colunaMenu: {
        backgroundColor: '#6495ED',
        paddingLeft: 8,
        paddingRight: 8,
    },
    coluna1: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 12,
        paddingRight: 12,

    },
    coluna2: {
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        paddingLeft: 12,
        paddingRight: 12,

    },
    menu1: {
        color: 'white',
        fontSize: 15,
        marginBottom: 10,
    },
    menu2: {
        color: 'black',
        fontSize: 15,
        marginBottom: 10,
    },
    info: {
        alignItems: 'center',
        width: '100%',
        height: 230,
        marginBottom: 70,
        backgroundColor: '#026601',        
      },
      infoText: {
        color:'#e0e0e0',
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
        
      },
      addtionalInfo:{
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
});