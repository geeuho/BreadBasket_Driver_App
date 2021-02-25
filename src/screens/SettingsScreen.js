import React from 'react'
import Header from "../header/Header"
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'


const SettingsScreen = props => {
    return (
        <View>
            <Header navigation={props.navigation} />
            <Text style={styles.textStyle}>Settings</Text>
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
    textStyle: {
        fontSize: 30
    },
    margin: {
        marginVertical: 50
    }

})
export default SettingsScreen