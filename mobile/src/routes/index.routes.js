import React from "react";
import { StatusBar } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import Welcome from "./welcome.routes";

export default function Routes(){
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#71A621" barStyle="light-content" />
            <Welcome />
        </NavigationContainer>
    )
}