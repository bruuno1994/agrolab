import React from "react";
import { StyleSheet, Text, View } from 'react-native'


const InfoCard = (props) => {

    // text princial darkTheme ? '#e0e0e0'  : 'white',

    // text secundario color: darkTheme ?'#adadad' : '#E4E4E4', 

    return(
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={[styles.text, {color: '#D7D9D7'}]}>{props.value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({   
    card:{
        alignItems: 'center',
        margin: 10,
        minWidth: 150,
      },
    text:{
        color: '#D7D9D7',
        margin: 5,
        marginLeft: 15,
        fontSize: 18,
      },
  });

export default InfoCard;