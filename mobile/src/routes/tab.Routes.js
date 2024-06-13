import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Contato from '../pages/Contato';
import Amostras from '../pages/Amostras';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#022601',
                tabBarInactiveTintColor: '#FFF',
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#A27440',
                    borderTopWidth: 0,

                    bottom: 10,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    borderRadius: 5,
                    height: 60,
                }
            }}    
        >          
            
            <Tab.Screen            
                name="HOME"
                component={Home}                
                options={{
                    headerShown: false,
                    tabBarIcon:({ color, focused }) => (
                        <Icon
                            name={focused ? "home" : "home-outline" }
                            color={color}
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="AMOSTRAS"
                component={Amostras}
                options={{
                    headerShown: false,
                    tabBarIcon:({ color, focused }) => (
                        <Icon
                            name={focused ? "document-attach" : "document-attach-outline" }
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="DASHBOARD"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon:({ color, focused }) => (
                        <Icon
                            name={focused ? "bar-chart-sharp" : "bar-chart-outline" }
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="CONTATOS"
                component={Contato}
                options={{
                    headerShown: false,
                    tabBarIcon:({ color, focused }) => (
                        <Icon
                            name={focused ? "construct-sharp" : "construct-outline" }
                            color={color}
                            size={30}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )
}