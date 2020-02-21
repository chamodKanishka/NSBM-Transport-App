import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import CircleButton from 'react-native-circle-button';
import {Header, Icon, Left, Right} from "native-base";
import bgImage from '../images/NSBM3.png';
import centerIcon from '../images/attach.png';
import Location from "./Location";
import Settings from "./Settings";
import Profile from "./Profile";

const { width: WIDTH } = Dimensions.get('window')
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name="menu"/>
                    </Left>
                    <Right>
                        <Text style={styles.right}>Transport Service</Text>
                    </Right>
                </Header>
                <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                    <CircleButton size={75} primaryColor={"#003d99"} secondaryColor={"#196619"}
                                  onPressButtonTop={()=>{this.props.navigation.navigate("Profile", {screen:Profile})}}
                                  onPressButtonLeft={()=>{this.props.navigation.navigate("Location", {screen:Location})}}
                                  onPressButtonBottom={()=>{this.props.navigation.navigate("Settings", {screen:Settings})}}
                                  onPressButtonRight={()=>{}}
                                  iconButtonCenter={centerIcon}/>
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
        backgroundColor:"#2196f3"
    },
    right:{
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
