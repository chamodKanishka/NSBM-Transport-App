import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import {Header, Icon, Left, Right} from "native-base";
import  Icons  from 'react-native-vector-icons/Ionicons';
import { Table, Row, Rows } from 'react-native-table-component';
import Home from './Home';


const { width: WIDTH } = Dimensions.get('window')
class Timetable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Start to NSBM', 'NSBM to End'],
            tableData: [
                ['Nugegoda','7 A.M - \n8 A.M', '8 A.M - \n9 A.M','Kirulapone',],
                ['Nugegoda','7 A.M - \n8 A.M', '8 A.M - \n9 A.M','Kirulapone',],
                ['Nugegoda','7 A.M - \n8 A.M', '8 A.M - \n9 A.M','Kirulapone',],
                ['a', 'b'],
                ['1', '2'],
                ['a', 'b'],
                ['a', 'b'],
                ['1', '2'],
                ['a', 'b'],
                ['a', 'b'],
                ['1', '2'],
                ['a', 'b']
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Header style={{backgroundColor:"#2196f3"}}>
                    <Left>
                        <Icons name="md-arrow-back" size={30} onPress={() =>this.props.navigation.navigate("Home", {screen:Home})}/>

                    </Left>
                    <Right>
                        <Text style={{fontSize:24, color:"white"}}>Timetable</Text>
                    </Right>
                </Header>
                <ScrollView>
                    <Text style={{ fontSize:20, fontWeight:'bold',marginBottom:20}}>Time Schedule</Text>
                    <Table style={styles.table} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={state.tableData} textStyle={styles.text}/>
                    </Table>
                </ScrollView>
            </View>
        );
    }
}
export default Timetable;

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
    tablecontainer: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6, fontWeight:'bold', fontSize:15, },
    table:{
        margin:5
    }

});
