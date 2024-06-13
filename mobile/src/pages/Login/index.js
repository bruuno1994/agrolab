import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { Styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const realizarLogin = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if (!user) {
                Alert.alert('Erro', 'Nenhum usuário cadastrado');
                return;
            }
            const userJson = JSON.parse(user);
            if (userJson.email === email && userJson.password === password) {
                navigation.navigate('Home');
            } else {
                Alert.alert('Erro', 'E-mail ou senha inválidos');
            }
        } catch (error) {
            Alert.alert('Erro', 'Houve um problema ao tentar realizar o login');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            
            <View style={Styles.container}>

                <Animatable.View animation="fadeInLeft" delay={600} style={Styles.containerHeader}>
                    <Text style={Styles.message}>Bem-vindo(a)</Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={Styles.containerForm}>

                    <Text style={Styles.title}>Email</Text>
                    <TextInput
                        style={Styles.input}
                        placeholder="Digite um email"
                        value={email}
                        onChangeText={setEmail}
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()} 
                        blurOnSubmit={false}
                    />

                    <Text style={Styles.title}>Senha</Text>
                    <TextInput
                        ref={(input) => { this.passwordInput = input; }} 
                        style={Styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        returnKeyType="done"
                        onSubmitEditing={realizarLogin}
                    />

                    <TouchableOpacity style={Styles.button} onPress={realizarLogin}>
                        <Text style={Styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Styles.buttonCadastro}
                        onPress={() => navigation.navigate('Cadastro')}
                    >
                        <Text style={Styles.buttonCad}>Cadastre-se</Text>
                    </TouchableOpacity>
                    
                </Animatable.View>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;
