import React,{useEffect, useState} from 'react'
import Header from "../header/Header"
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
            <Header icon = "arrow-left-thick" navigation={navigation}/>
            <View style = {styles.topSection}>

            </View>
            <ScrollView style = {styles.bottomSection}>
                <Text style = {styles.priceText}>
                    {route.params.total}
                </Text>
                <View>
                    <Text>
                        {route.params.tip}
                    </Text>
                    <Text>
                        {route.params.payment}
                    </Text>
                </View>
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
        activeOrder: state.order
    })
}
export default connect(mapStateToProps, {getActiveOrders})(OrderScreen)