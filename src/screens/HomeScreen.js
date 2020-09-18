import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Menu from '../components/MenuComp'


const HomeScreen = props => {
    return (
        <View>
            <Text style={styles.textStyle}>Home</Text>
            <TouchableOpacity style = {styles.margin} onPress = {() => {
                props.navigation.navigate('Order')   
            }}>
                <Text style={styles.textStyle}>To Order Page</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.margin} onPress = {() => {
                props.navigation.navigate('Profile')
            }}>
                <Text style ={styles.textStyle}>To Profile Page</Text>
            </TouchableOpacity>
            <Menu/>
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
export default HomeScreen