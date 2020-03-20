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
import Location from "./Screen/Location";
import Settings from "./Screen/Settings";
import Profile from "./Screen/Profile";
import Timetable from './Screen/Timetable';
import RNBootSplash from "react-native-bootsplash";

RNBootSplash.hide();

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
            headerShown: false,  //Make the header bar Null - No Header
            gestureEnabled: false  //Gestures disable
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {  // Extra Navigation Options
            headerShown: false,  //Make the header bar Null - No Header
            gestureEnabled: false  //Gestures disable
        },
    },
    Location:{
        screen: Location,
        navigationOptions:{
            headerShown: false,
            gestureEnabled: false
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions:{
            headerShown: false,
            gestureEnabled: false
        }
    },
    Settings:{
        screen: Settings,
        navigationOptions:{
            headerShown: false,
            gestureEnabled: false
        }
    },
    Timetable:{
        screen: Timetable,
        navigationOptions:{
            headerShown: false,
            gestureEnabled: false
        }
    }

});

//Make App Navigator to creating app container
const AppContainer = createAppContainer(AppNavigator);
