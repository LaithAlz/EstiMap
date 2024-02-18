import React from 'react';
import type PropsWithChildren from 'react';

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import App from './App';
import Map from './Map';

export type RootStackParamList = {
    App: undefined;
    Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="App">
            <Stack.Screen
               name="App"
               component={App}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Map"
               component={Map}
               options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default AppNavigator;