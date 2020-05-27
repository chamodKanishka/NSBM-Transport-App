import React, { Component } from 'react';
import {StyleSheet, Text, View, PermissionsAndroid, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import {Header, Icon, Left, Right} from "native-base";
import Icons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import PhotoUpload from 'react-native-photo-upload';
import CommonUser from './commonUser'


async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'NSBM Transport App Camera Permission',
          message:
            'NSBM Transort App needs access to your camera, ' +
            'so you can share location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

class Profile extends Component {
    async componentDidMount(){
        await requestCameraPermission()
    }
    render() {
        console.log(CommonUser.driver)
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icons name="md-arrow-back" size={30} onPress={() =>this.props.navigation.navigate("Home", {screen:Home})}/>

                    </Left>
                    <Right>
                        <Text style={{fontSize:24, color:"white"}}>Profile</Text>
                    </Right>
                </Header>
                <View style={{ height:150,alignItems:'center', justifyContent:'center', marginBottom:50,}}>
                    <PhotoUpload
                        onPhotoSelect={avatar => {
                            if (avatar) {
                                console.log('Image base64 string: ', avatar)
                            }
                        }}
                    >
                        <Image
                            style={{
                                paddingVertical: 30,
                                width: 150,
                                height: 150,
                                borderRadius: 75,
                                marginTop: 50,
                            }}
                            resizeMode='cover'
                            source={{
                                uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                            }}
                        />
                    </PhotoUpload>
                </View>
                <View style={{marginLeft:20,}}>
                    <Text style={styles.label}>Name: {CommonUser.driver.name}</Text>
                    <Text style={styles.label}>NIC: {CommonUser.driver.nic}</Text>
                    <Text style={styles.label}>Contact No: {CommonUser.driver.contactNo}</Text>
                    <Text style={styles.label}>Vehicle No: {CommonUser.driver.vehicalNo}</Text>
                    <Text style={styles.label}>Destination: {CommonUser.driver.destination}</Text>
                </View>
            </View>
        );
    }
}
export default Profile;

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
    },
    label:{
        fontSize:20,
        fontWeight:'700',
        marginBottom:30
    }
});
