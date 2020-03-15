import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, BackHandler, DeviceEventEmitter } from 'react-native';
import {Header, Icon, Left, Right} from "native-base";
import  Icons  from 'react-native-vector-icons/Ionicons'
import Home from './Home';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

class Location extends Component {  
    componentWillUnmount() {
        // used only when "providerListener" is enabled
        LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener
    }
    render() {
        LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message: "<h2 style='color: #0af13e'>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
            ok: "YES",
            cancel: "NO",
            enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
            showDialog: true, // false => Opens the Location access page directly
            openLocationServices: true, // false => Directly catch method is called if location services are turned off
            preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
            preventBackClick: false, // true => To prevent the location services popup from closing when it is clicked back button
            providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
        }).then(function(success) {
            console.log(success); // success => {alreadyEnabled: false, enabled: true, status: "enabled"}
        }).catch((error) => {
            console.log(error.message); // error.message => "disabled"
        });
         
        BackHandler.addEventListener('hardwareBackPress', () => { //(optional) you can use it if you need it
           //do not use this method if you are using navigation."preventBackClick: false" is already doing the same thing.
           LocationServicesDialogBox.forceCloseDialog();
        });
         
        DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
            console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
        });
        return (
            <View style={styles.container}>
            <Header style={styles.header}>
                    <Left>
                        <Icons name="md-arrow-back" size={30} onPress={() =>this.props.navigation.navigate("Home", {screen:Home})}/>

                    </Left>
                    <Right>
                        <Text style={{fontSize:24, color:"white"}}>Location</Text>
                    </Right>
                </Header>
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 6.8211,
                    longitude: 80.0409,
                    latitudeDelta: 0.025,
                    longitudeDelta: 0.0121,
                }}
                >
                </MapView>
            </View>
        );
    }
}
export default Location;

const styles = StyleSheet.create({
    container: {
        flex:1,
        height: null,
        width: null,
        //justifyContent:,
        alignItems:'stretch',
        ...StyleSheet.absoluteFillObject,
  
      },
      map: {
        ...StyleSheet.absoluteFillObject,
        marginTop:50,
        marginBottom:50,
      },
      header:{
        backgroundColor:"#2196f3"
    },
    right:{
        fontSize:24,
        color:"white"
    }
   });
   
