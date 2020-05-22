
import React, { Component } from "react";
import Icons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Right, Icon} from 'native-base';
import QRCode from 'react-native-qrcode-generator';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

export default class MyEid extends Component{
    state = {
        text: 'https://www.fb.com',
    };

    render(){
        return(
            <View style={styles.maincontainer}>
            <View style={styles.container}>
                <QRCode
                    value={this.state.text}
                    size={500}
                    bgColor='black'
                    fgColor='white'/>
            </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // padding:200,
        // marginLeft:100
        paddingLeft:250,
        paddingTop:200,
        // resizeMode: false

    },
    maincontainer:{
        flex:1,
    },
    header:{
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white",
    }

});
