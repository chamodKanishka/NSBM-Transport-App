import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import {Header, Icon, Left, Right} from "native-base";
import Icons from 'react-native-vector-icons/Ionicons';
import PhotoUpload from 'react-native-photo-upload';
import Home from './Home';


const { width: WIDTH } = Dimensions.get('window')
class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header style={{backgroundColor:"#2196f3"}}>
                    <Left>
                        <Icons name="md-arrow-back" size={30} onPress={() =>this.props.navigation.navigate("Home", {screen:Home})}/>

                    </Left>
                    <Right>
                        <Text style={{fontSize:24, color:"white"}}>Profile</Text>
                    </Right>
                </Header>
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
                            borderRadius: 75
                        }}
                        resizeMode='cover'
                        source={{
                            uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                        }}
                    />
                </PhotoUpload>
                <View style={{marginLeft:20,}}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.label}>ID:</Text>
                    <Text style={styles.label}>NIC:</Text>
                    <Text style={styles.label}>Contact No:</Text>
                    <Text style={styles.label}>Relevant's No:</Text>
                    <Text style={styles.label}>Vehicle No:</Text>
                    <Text style={styles.label}>Destination:</Text>
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
        backgroundColor:"#2196f3"
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
