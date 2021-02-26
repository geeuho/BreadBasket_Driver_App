import React from 'react'
import Header from "../header/Header"
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Box from '../components/Box'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const SettingsScreen = props => {
    return (
        <View>
            <Header title = "Settings"icon = "arrow-left-thick" navigation={props.navigation} />
            <Box>
                <Text style = {styles.header}>
                    App
                </Text>
            </Box>
            <Box>
                <Text style = {styles.header}>
                    Preferences
                </Text>
                
                <View>
                </View>
                <TouchableOpacity onPress={() => {
                    props.navigation.push('Orders')
                }}>
                    <View style = {styles.row}>
                        <Text style={{fontSize: 20}}>Preferred Map</Text>
                        <Icon name = "chevron-right" size = {30}></Icon>
                    </View>
                </TouchableOpacity>
                <View style = {styles.border}></View>
                <TouchableOpacity onPress={() => {
                    props.navigation.push('Orders')
                }}>
                    <View style = {styles.row}>
                        <Text style={{fontSize: 20}}>Preferred Map</Text>
                        <Icon name = "chevron-right" size = {30}></Icon>
                    </View>
                </TouchableOpacity>
            </Box>
            <TouchableOpacity style={styles.margin} onPress={() => {
                props.navigation.navigate('Order')
            }}>
                <Text style={styles.textStyle}>To Order Page</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.margin} onPress={() => {
                props.navigation.navigate('Profile')
            }}>
                <Text style={styles.textStyle}>To Profile Page</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginTop: 10
    },
    textStyle: {
        fontSize: 30
    },
    margin: {
        marginVertical: 50
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }

})
export default SettingsScreen