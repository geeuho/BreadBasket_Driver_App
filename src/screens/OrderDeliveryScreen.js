import React, {useState, useEffect} from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Header from '../header/Header'

const OrderDeliveryScreen = ({currentOrder, navigation}) => {

// Need to get order info to check address and order details
// Need to get map and navigate button to get app to maps for navigation from current to location
// Need to get current location to check whether its right location 
// Need start shopping order button when current location is near store 

    useEffect(() => {
        console.log(currentOrder)
    })

    return(
        <View>
            <Header icon = "menu" styles = {{'backgroundColor': '#98fb98'}} navigation={navigation} />
            <ScrollView>
                <Text style = {styles.header}>
                    Order Delivery Screen
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 30
    }
})

let mapStateToProps = state => {
    return{
        currentOrder: state.orders.current_order
    }
}

export default connect(mapStateToProps)(OrderDeliveryScreen)