import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import CircleButton from 'react-native-circle-button';
import {Header, Icon, Left, Right} from "native-base";

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
                    <CircleButton size={100} />
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
    }
})
