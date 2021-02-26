import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const GreenButton = () => {
    return (
        <TouchableOpacity style = {styles.accept_button}  onPress = {() => console.log("accept order")}>
            <Text style = {{fontWeight: 'bold', fontSize: 20}}>Accept Order</Text>
        </TouchableOpacity>
    )
}

export default GreenButton