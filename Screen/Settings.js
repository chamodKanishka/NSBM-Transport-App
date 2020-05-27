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
import MyEid from './components/settings/MyEid';
import Login from './Login';
import CommonUser from './commonUser';

const { width: WIDTH } = Dimensions.get('window')
class Settings extends Component {


    navigateToMyEid = () => {
        const { navigation } = this.props
        navigation.navigate('MyEid');
    }


    navigateToLogout = () => {
        const {} = this.props.navigation.navigate
        ('Login', {screen:Login});
        console.log('login')
        CommonUser.user = undefined;

        CommonUser.driver = undefined;
    }


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
                        text='My E-ID'
                        iconName='vcard-o'
                        onPressCallback={this.navigateToMyEid} />
                        <SwitchRow
                            text='Allow Push Notification'
                            iconName='sticky-note'
                           />
                        <CheckRow
                            text='Hide My Location'
                            iconName='location-arrow'
                            _color='#000'
                            />
                            <NavigateRow
                        text='Log Out'
                        iconName='sign-out'
                        onPressCallback={this.navigateToLogout}/>
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
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white"
    }
});
