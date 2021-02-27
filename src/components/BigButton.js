import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const BigButton = (props) => {
    return (
        <TouchableOpacity style = {styles[`${props.color}_button`]}  onPress = {props.onPressAction}>
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
    },
    gray_button: {
        marginBottom: 15,
        marginLeft: 20, 
        marginRight: 20,
        padding: 15,
        borderRadius: 10,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3'
    }
})

export default BigButton