import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import 'react-native-gesture-handler';

import Login from "./LoginPage";
import Home from "./HomePage";
import Detail from "./component/DetailCountry";
import About from "./AboutUs";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './User'

export const store = createStore(reducer)
const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" headerMode={'none'}>
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='Detail' component={Detail}/>
                    <Stack.Screen name='About' component={About}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
