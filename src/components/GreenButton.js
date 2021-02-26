import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const GreenButton = (props) => {
    return (
        <TouchableOpacity style = {styles.green_button}  onPress = {props.onPressAction}>
            <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 20}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    green_button: {
        marginBottom: 15,
        marginLeft: 20, 
        marginRight: 20,
        padding: 15,
        borderRadius: 10,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3cb371'
    }
})

export default GreenButton