import React, { Component } from 'react';
import {StyleSheet, Text, View, PermissionsAndroid, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, BackHandler, DeviceEventEmitter } from 'react-native';
import {Header, Icon, Left, Right} from "native-base";
import  Icons  from 'react-native-vector-icons/Ionicons'
import Home from './Home';
import  MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Logo from '../images/logoss.png'
import DarkMap from './components/mapColor/darkmap'
import LightMap from './components/mapColor/lightmap'

const origin = {latitude: 6.8211, longitude: 80.0409};
const destination = {latitude: 6.8412, longitude: 79.9654};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDPSp37X3waDDvB0X6-GXHOJdnREHsJHyY';

async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'NSBM Transport App Location Permission',
          message:
            'NSBM Transort App needs access to your location, ' +
            'so you can share location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }


class Location extends Component {
    async componentDidMount(){
        await requestLocationPermission()
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
                        <Text style={styles.text}>Location</Text>
                    </Right>
                </Header>
                <MapView
                    region={this.props.coordinate}
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsCompass={true}
                    showsBuildings={true}
                    showsTraffic={true}
                    customMapStyle={LightMap}
                    region={{
                        latitude: 6.8211,
                        longitude: 80.0409,
                        latitudeDelta: 0.025,
                        longitudeDelta: 0.0121,
                }}
                >
                <MapViewDirections
                  origin={origin}
                  destination={destination}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={3}
                  strokeColor="hotpink"
                />
                    <Marker
                        title={"NSBM Green University Town"}
                        coordinate={{
                            latitude: 6.8211,
                            longitude: 80.0409,
                        }}
                        pinColor={"green"}
                        description={"National School of Bussiness Management"}
                        icon={Logo}
                        rotation={0}
                        opacity={1.0}
                     />
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
        marginTop:60,
        marginLeft:5,
        marginRight:5,
        marginBottom:5
      },
      header:{
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white"
    },
    text:{
        fontSize:24, 
        color:"white"
    }
   });
   
