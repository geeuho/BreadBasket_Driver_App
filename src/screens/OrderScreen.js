import React,{useEffect, useState} from 'react'
import Header from "../header/Header"
import OrderBox from '../components/OrderBox'
import { connect } from 'react-redux'
import {getActiveOrders, getOrderItems} from '../actions'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

let OrderScreen = ({route, navigation}, props) => {

    useEffect(() => {
        console.log(route)
    })

    return(
        <View style = {styles.screen}>
            <View style = {styles.topSection}>
                <TouchableOpacity style = {styles.backButton} onPress = {() => {navigation.goBack()}}>
                    <Icon name = "arrow-left-thick" size = {30}></Icon>
                </TouchableOpacity>
                
            </View>
            <ScrollView style = {styles.bottomSection}>
                <Text style = {styles.priceText}>
                    {route.params.total}
                </Text>
                <View style = {styles.priceRow}>
                    <Text style = {styles.priceRowText} >
                        ${route.params.payment.toFixed(2)} payment + ${route.params.tip.toFixed(2)} tip
                    </Text>
                    <Text style = {styles.estimateText}>
                        Payment Estimate
                    </Text>
                    <View style = {styles.border}></View>
                </View>
                <View style = {styles.order_info}>
                    <Icon style = {{paddingRight: 2}} name = "cart" size = {20}></Icon>
                    <Text>{route.params.orderCount} Items/ {route.params.unitCount} Units</Text>    
                </View>
                <View style = {styles.order_info}>
                    <Icon style = {{paddingRight: 2}} name = "car" size = {20}></Icon>
                    <Text>Distance: 9.2 miles</Text>    
                </View>

            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    backButton: {
        marginTop: 50,
        marginLeft: 25
    },  
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
        height: '60%'
    },
    bottomSection: {
        position: 'absolute',
        borderRadius: 10,
        display: 'flex',
        height: '45%',
        width: '100%',
        bottom: 0,
        backgroundColor: 'white',
    },
    priceText: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 20,
    },
    priceRow: {
        paddingLeft: 15
    },
    priceRowText: {
        fontSize: 20,
        paddingLeft: 10
    },
    estimateText: {
        paddingLeft: 10,
        marginTop: 10,
        fontSize: 15,
        color: 'gray'
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginTop: 15,
        marginRight: 15
    },
    order_info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20
    },
})

let mapStateToProps = (state) => {
    return({
        activeOrder: state.order
    })
}
export default connect(mapStateToProps, {getActiveOrders})(OrderScreen)