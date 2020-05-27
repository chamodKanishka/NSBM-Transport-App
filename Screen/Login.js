import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconsi from 'react-native-vector-icons/MaterialCommunityIcons'
import bgImage from '../images/nsbm1.jpeg'
import logo from '../images/logosss.png'
import Home from "./Home";
import Snackbar from 'react-native-snackbar-component';
import CommonUser from './commonUser';
import axios from 'axios';

const { width: WIDTH } = Dimensions.get('window')
class Login extends Component {
    constructor(){
        super()
        this.state = {
            showPass: true,
            press: false,
            userEmail: "",
            userPassword: "",
            role: '3',
            snackIsVisible: false,
        }
    }

    handleLogin = () => {
        console.log(this.state)
        axios.post(`http://192.168.43.199:8083/api/user/checkUser`, {
            userEmail: this.state.userEmail,
            userPassword: this.state.userPassword,
            userRole: this.state.role
        })

            .then(res => {


                if (res.data.userEmail !== undefined) {
                
                    CommonUser.user = res.data
                    this.props.navigation.navigate("Home", { screen: Home })
                }
                else {
                    this.setState({
                        snackIsVisible: !this.state.snackIsVisible
                    });
                }

                axios.get(`http://192.168.43.199:8083/api/driver/driver/` + CommonUser.user.userEmail)
                .then(res => {
                    CommonUser.driver = res.data;
                })
                .catch(error => { console.log(error) });

            })
            .catch(error => {
                this.setState({
                    snackIsVisible: !this.state.snackIsVisible
                });
            });
    };

    showPass = () => {
        if(this.state.press == false) {
            this.setState({ showPass: false, press: true})
        }
        else {
            this.setState({ showPass: true, press : false})
        }
    }
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>NSBM TRANSPORT APP</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icons name={'user'} size={24} color={'rgba(255,255,255,0.7)'}
                     style={styles.inputIcon}></Icons>
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(0,0,0,0.5)'}
                        underlineColorAndroid='transparent'
                        keyboardType="email-address"
                        onChangeText={userEmail => this.setState({ userEmail })}
                        value={this.state.userEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                <Iconsi name={'textbox-password'} size={24} color={'rgba(255,255,255,0.7)'}
                     style={styles.inputIcon}></Iconsi>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(0,0,0,0.5)'}
                        underlineColorAndroid='transparent'
                        onChangeText={userPassword => this.setState({ userPassword })}
                        value={this.state.userPassword}
                    />

                    <TouchableOpacity style={styles.btnEye}
                        onPress={this.showPass.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(0,0,0,0.5)'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={this.handleLogin}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <Snackbar
                    visible={this.state.snackIsVisible}
                    //SnackBar visibility control
                    textMessage="Your email or password incorrect"
                    //Text on SnackBar
                    actionHandler={() => {
                        //After handling click making nackBar invisible
                        this.setState({
                            snackIsVisible: !this.state.snackIsVisible
                        });
                    }}
                    actionText="try again"
                    //action Text to print on SnackBar
                    distanceCallback={distance => {
                        //Number indicating distance taken up by snackbar
                        this.setState({ distance: distance });
                    }}
                />
            </ImageBackground>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50

    },
    logo: {
        width: 80,
        height: 100
    },
    logoText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500',
        marginTop: 10,
        opacity: 1
    },
    inputContainer:{
        marginTop: 10

    },
    inputIcon:{
        position: 'absolute',
        top:8,
        left:40

    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'rgba(55,55,55,0.8)',
        marginHorizontal: 25

    },

    btnLogin:{
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#007aff',
        justifyContent: 'center',
        marginTop:20,
    },
    text:{
        color: 'rgba(255,255,255,1)',
        fontSize:20,
        textAlign: 'center'

    },
    btnEye:{
        position:'absolute',
        top: 8,
        right: 37
    }



});