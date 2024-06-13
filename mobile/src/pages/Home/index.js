import React from "react";
import { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";

import Feather from 'react-native-vector-icons/Feather'
import * as Location from 'react-native-get-location'

import MainCard from '../../components/MainCard'
import InfoCard from "../../components/InfoCard"

import { Styles } from './styles';



export default function Home() {


    const [DarkTheme, setDarkTheme] = useState(true)

    const [currentTemperature, setCurrentTemperature] = useState('18')
    const [locaton, setLocation] = useState('BR, Franca-SP')
    const [currentHoras, setCurrentHoras] = useState('21h53')

    const [wind, setWind] = useState('65')
    const [umidity, seUmidity] = useState('80')
    const [tempMin, setTempMin] = useState('71')
    const [temMax, setTempMax] = useState('31')

    const [locationCoords, setLocationCoords] = useState(null);

    async function getLocation() {
        let { status } = await Location.requestPermissionsAsync()
        if (status !== 'granted') {
            setErrorMsg('Permissão negada!!!')
        } else {
            let location = await Location.getCurrentPositionAsync({})
            await setLocationCoords(location.coords)
        }
    }
    useEffect(() => {
        getLocation()
      }, [])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={Styles.container}>

                    <TouchableOpacity style={Styles.refresh}>
                        <Feather name="refresh-ccw" size={24} color={DarkTheme ? '#A27440' : '#71A621'} />
                    </TouchableOpacity>

                    <Feather
                        name="sun"
                        style={{ marginTop: 10 }}
                        size={60}
                        color='orange'
                    />

                    <View style={Styles.temp}>
                        <Text style={Styles.tempText}>{currentTemperature}</Text>
                        <Text style={[Styles.tempText, { fontSize: 20 }]}> °C </Text>
                    </View>

                    <Text style={[Styles.tempText, { fontSize: 20 }]}>{locaton} {currentHoras}</Text>

                    <View style={Styles.cardView}>
                        <MainCard title={'Manhã'} backgroundColor={DarkTheme ? '#ff873d' : '#cc6e30'} temp={'28°C'} icon={'morning'}></MainCard>
                        <MainCard title={'Tarde'} backgroundColor={DarkTheme ? '#D29600' : '#FCC63F'} temp={'35°C'} icon={'afternoon'}></MainCard>
                        <MainCard title={'Noite'} backgroundColor={DarkTheme ? '#008081' : '#cc6e30'} temp={'21°C'} icon={'night'}></MainCard>
                    </View>

                    <View style={Styles.info}>
                        <Text style={Styles.infoText}>Informações adcionais:</Text>
                        <View style={Styles.addtionalInfo}>
                            <InfoCard title={'Vento'} value={wind + 'm/h'}></InfoCard>
                            <InfoCard title={'Umidade'} value={umidity + '%'}></InfoCard>
                            <InfoCard title={'Temp. Min'} value={tempMin}></InfoCard>
                            <InfoCard title={'Temp. Max'} value={temMax}></InfoCard>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}