import React from "react";
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Feather from 'react-native-vector-icons/Feather'

const MainCard = (props) => {

    const Icon = () => {
        if(props.icon === 'morning'){
            return(
                <Feather name="sun" style={styles.cardIcon} size={60} color='white' />
            )
        }
        if(props.icon === 'afternoon'){
            return(
                <Feather name="sunset" style={styles.cardIcon} size={60} color='white' />
            )
        }
        if(props.icon === 'night'){
            return(
                <Feather name="moon" style={styles.cardIcon} size={60} color='white' />
            )
        }

    }

    const styles = StyleSheet.create({

        card: {
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',        
            borderRadius: 20,
            margin: 10,
            width: 100,
            height: 200
    
        },
        refresh:{
            position: 'absolute',
            margin: 30,
            alignSelf: 'flex-start'
        },        
        title: {
            color: 'white',
            margin: 15,
            fontSize: 20,    
        },
        cardIcon:{
            color: 'white',
            margin: 15,
        },
    });

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
            <Icon></Icon>
            <Text style={styles.title}>{props.temp}</Text>
        </View>
    )


}
export default MainCard