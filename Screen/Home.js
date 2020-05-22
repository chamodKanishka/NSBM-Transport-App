import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import CircleButton from 'react-native-circle-button';
import {Header, Icon, Left, Right} from "native-base";
import bgImage from '../images/NSBM3.png';
import centerIcon from '../images/bus.png';
import leftIcon from '../images/map-location.png';
import bottomIcon from '../images/settings.png';
import topIcon from '../images/user.png';
import rightIcon from '../images/calendar.png';
import Location from "./Location";
import Settings from "./Settings";
import Profile from "./Profile";
import Timetable from './Timetable';

const { width: WIDTH } = Dimensions.get('window')
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                    </Left>
                    <Right>
                    <Text style={styles.left}>Transport Service</Text>
                        
                    </Right>
                </Header>
                <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                    <CircleButton size={75} primaryColor={"#003d99"} secondaryColor={"rgba(0,0,0,0.5)"}
                                  onPressButtonTop={()=>{this.props.navigation.navigate("Profile", {screen:Profile})}}
                                  onPressButtonLeft={()=>{this.props.navigation.navigate("Location", {screen:Location})}}
                                  onPressButtonBottom={()=>{this.props.navigation.navigate("Settings", {screen:Settings})}}
                                  onPressButtonRight={()=>{this.props.navigation.navigate("Timetable", {screen:Timetable})}}
                                  iconButtonCenter={centerIcon}
                                  iconButtonLeft={leftIcon}
                                  iconButtonBottom={bottomIcon}
                                  iconButtonTop={topIcon}
                                  iconButtonRight={rightIcon}/>
                </ImageBackground>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        backgroundColor:"#2879fe"
    },
    left:{
        fontSize:24,
        color:"white"
    },
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
