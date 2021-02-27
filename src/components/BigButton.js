import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const BigButton = (props) => {
    return (
        <TouchableOpacity style = {styles[`${props.color}_button`]} onPress = {props.onPressAction}>
            <Text style = {styles[`${props.color}_text`]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    green_button: {
        marginBottom: 15,
        marginLeft: 10, 
        marginRight: 10,
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
        marginLeft: 10, 
        marginRight: 10,
        padding: 15,
        borderRadius: 10,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
    },
    green_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    gray_text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    }

})

export default BigButton