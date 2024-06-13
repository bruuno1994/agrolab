import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro/index';

import TabRoutes from '../routes/tab.Routes';

const Stack = createNativeStackNavigator();

export default function Welcome() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    headerShown: false,
                    tabBarVisible: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="Home"
                component={TabRoutes}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}