import { DarkTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: DarkTheme ? '#D7D9D7' : '#C5D932',
        flex: 1,
        alignItems: "center",
    },
    temp:{
        alignItems: "center",
        flexDirection: 'row',
        marginTop: 5,

    },
    tempText:{
        color: DarkTheme ? 'red' : 'black',
        fontSize: 30,
    },
    refresh:{
        position: 'absolute',
        margin: 15,
        alignSelf: 'flex-start'
    }, 
    cardView:{
        color: DarkTheme ? 'black' : 'blue',
        margin: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        alignItems: 'center',
        borderRadius: 20,
        width: 350,
        height: 230,
        backgroundColor: DarkTheme ? '#026601'  :'#8F8F8F',
        
      },
      infoText: {
        color: DarkTheme ? '#e0e0e0'  : 'white',
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
      },
      addtionalInfo:{
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
       
});