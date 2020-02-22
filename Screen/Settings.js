import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import {Header, Icon, Left, Right} from "native-base";
import Icons from 'react-native-vector-icons/Ionicons';
import ReactNativeSettingsPage, {
    SectionRow,
    NavigateRow,
    CheckRow,
    SwitchRow,
    SliderRow
} from 'react-native-settings-page';

import Home from './Home';


const { width: WIDTH } = Dimensions.get('window')
class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icons name="md-arrow-back" size={30} onPress={() =>this.props.navigation.navigate("Home", {screen:Home})}/>

                    </Left>
                    <Right>
                        <Text style={{fontSize:24, color:"white"}}>Settings</Text>
                    </Right>
                </Header>
                <ReactNativeSettingsPage>
                    <SectionRow text='Settings'>
                        <NavigateRow
                            text='Profile'
                            iconName='ios-contact'
                            />
                        <SwitchRow
                            text='Allow Push Notification'
                            iconName='your-icon-name'
                           />
                        <CheckRow
                            text='Hide My Details'
                            iconName='your-icon-name'
                            _color='#000'
                            />
                        <SliderRow
                            text='Slider Row'
                            iconName='your-icon-name'
                            _color='#000'
                            _min={0}
                            _max={100}
                            />
                    </SectionRow>
                </ReactNativeSettingsPage>
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
