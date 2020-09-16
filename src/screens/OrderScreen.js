import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Orders = () => {
    return(
        <View>
            <Text style = {styles.textStyle}>Orders</Text>
        </View>
    )

    const styles = StyleSheet.create({
        textStyle:{
            fontSize:30
        }
    })
}

export default Orders