/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Settings from './Settings'
import MyEid from './components/settings/MyEid';

export default class SettingsContainer extends Component{
    render() {
        return <AppContainer />;
    }
}

//Creating Stack Navigator for All Routes in Application
const AppNavigator = createStackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {  // Extra Navigation Options
            headerShown: false,  //Make the header bar Null - No Header
            gestureEnabled: false  //Gestures disable
          },
    }, 

});

//Make App Navigator to creating app container
const AppContainer = createAppContainer(AppNavigator);
