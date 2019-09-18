/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';


import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import Login from "./Screen/Login";

const { width: WIDTH } = Dimensions.get('window')
const App = () => {
  return (
      <Login/>
  );
}


export default App;
