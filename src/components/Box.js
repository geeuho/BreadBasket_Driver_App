import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'

const Box = props => {
    return(
        <Card>
            <Card.Title title={props.title}></Card.Title>
            
        </Card>
    )
}

let styles = StyleSheet.create({
    card: {
        margin: 10
    }
})

export default Box

