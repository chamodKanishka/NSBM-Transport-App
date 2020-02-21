import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import {Header, Icon, Left, Right} from "native-base";


const { width: WIDTH } = Dimensions.get('window')
class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name="menu"/>
                    </Left>
                    <Right>
                        <Text style={styles.right}>Settings</Text>
                    </Right>
                </Header>
            </View>
        );
    }
}
export default Settings;

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
    }
});
