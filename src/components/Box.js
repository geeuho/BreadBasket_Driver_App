import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'

const Section = props => {
    return(
        <Card style = {styles.card}>
            <Card.Content>
                {props.children}
            </Card.Content>
        </Card>
    )
}

let styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        margin: 10
    }
})

export default Section
