/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Screen/Login';
import Home from './Screen/Home';


export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

//Creating Stack Navigator for All Routes in Application
const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {  // Extra Navigation Options
            header: null,  //Make the header bar Null - No Header
            gesturesEnabled: false  //Gestures disable
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {  // Extra Navigation Options
            header: null,  //Make the header bar Null - No Header
            gesturesEnabled: false  //Gestures disable
        },
    },

});

//Make App Navigator to creating app container
const AppContainer = createAppContainer(AppNavigator);