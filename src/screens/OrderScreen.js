import React,{useEffect, useState} from 'react'
import Header from "../navigation/Header"
import OrderBox from '../components/OrderBox'
import { connect } from 'react-redux'
import {getActiveOrders, getOrderItems} from '../actions'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

let OrderScreen = ({route, navigation}, props) => {

    useEffect(() => {
        console.log(route)
    })

    let renderOrderBoxes = () => {
        return this.props.activeOrders.map(order => {
            
            let attributes = order.attributes
            let total = attributes.tip + attributes.payment
            console.log(attributes, total)
            // return <OrderBox total = {total}/>
        })
    }

    return(
        <View style = {styles.screen}>
            <Header icon = "left" navigation={navigation} title = {"Active Orders"}/>
            <View style = {styles.topSection}>

            </View>
            <ScrollView style = {styles.bottomSection}>
                <Text style = {styles.priceText}>
                    $18.56
                </Text>
                
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    screen: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },  
    topSection: {
        backgroundColor: 'blue',
        height: '45%'
    },
    bottomSection: {
        position: 'absolute',
        borderRadius: 10,
        display: 'flex',
        height: '50%',
        width: '100%',
        bottom: 0,
        backgroundColor: 'white',
    },
    priceText: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: 15,
    }
})

let mapStateToProps = (state) => {
    return({
        activeOrders: state.orders.active_orders
    })
}
export default connect(mapStateToProps, {getActiveOrders})(OrderScreen)