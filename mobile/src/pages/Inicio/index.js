import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { Styles } from './styles'

export default function Inicio() {
    const navigation = useNavigation();
    
    return (
        <View style={Styles.container}>

            <View style={Styles.containerLogo}>
                <Animatable.Image delay={800}
                    animation="flipInY"
                    source={require('../../image/logo.png')}
                    style={{ width: '100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={2000} animation="fadeInUp" style={Styles.containerForm}>
                <Text style={Styles.title}>LABORATÓRIO AGROLAB</Text>
                <Text style={Styles.text}>Faça o login para começar</Text>
            

            <TouchableOpacity 
                style={Styles.button}
                onPress={ () => navigation.navigate('Login')}
                > 
                    <Text style={Styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

