import React,{useEffect, useState} from 'react'
import Header from "../navigation/Header"
import OrderBox from '../components/OrderBox'
import { connect } from 'react-redux'
import {getActiveOrders, getOrderItems} from '../actions'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

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
        <View>
            <Header icon = "left" navigation={navigation} title = {"Active Orders"}/>
            <Text>Order</Text>
            <View>
           

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
})

let mapStateToProps = (state) => {
    return({
        activeOrders: state.orders.active_orders
    })
}
export default connect(mapStateToProps, {getActiveOrders})(OrderScreen)