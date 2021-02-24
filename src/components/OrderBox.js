import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'

const OrderBox = props => {
    return(
        <Card style = {styles.card}>
            <Card.Title title={props.title}></Card.Title>
            <Card.Content>
                {props.children}
            </Card.Content>
        </Card>
    )
}

let styles = StyleSheet.create({
    card: {
        margin: 10
    }
})

export default OrderBox

