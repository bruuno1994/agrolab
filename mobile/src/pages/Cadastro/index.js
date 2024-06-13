import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import { Styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cadastro = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastro = async () => {
        const user = {
            email,
            password,
        }
        await AsyncStorage.setItem('user', JSON.stringify(user));
        Alert.alert('Usuário cadastrado com sucesso!')
        navigation.navigate('Login')
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={Styles.container}>
                <Image
                    source={require('../../image/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />

                <Text style={Styles.title}>CADASTRO</Text>

                <TextInput
                    style={Styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={Styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={Styles.button} onPress={handleCadastro}>
                    <Text style={Styles.buttonText}>Salvar</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        </KeyboardAvoidingView>

    )

}

export default Cadastro;