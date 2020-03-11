import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import {Header, Icon, Left, Right} from "native-base";
import  Icons  from 'react-native-vector-icons/Ionicons'
import Home from './Home';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const { width: WIDTH } = Dimensions.get('window')
class Location extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header style={{backgroundColor:"#2196f3"}}>
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
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
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
    container:{
        flex:1,
        ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    },
    header:{
        backgroundColor:"#2196f3"
    },
    right:{
        fontSize:24,
        color:"white"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
});
