import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getActiveOrders, getOrderItems, acceptOrder, storeLocation} from '../actions'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image, Button} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BigButton from '../components/BigButton'
import OrderItemImage from '../components/OrderItemImage'
import Map from '../components/Map'

const AcceptOrderScreen = ({route, navigation, getOrderItems, orderItems, acceptOrder}) => {
   
    useEffect(() => {
        console.log(orderItems, "OOOOOORDER")
        getOrderItems(route.params.orderId)
    }, [])

    let order_items = orderItems.map((item) => {
        return item.attributes
    })

    let acceptOrderAction = async() => {
        let params = route.params
        acceptOrder(params.orderId, params.address, order_items, params.orderCount, params.unitCount, params.store_name),
        navigation.push('OrderNav')
    }

    return(
        <View style = {styles.screen}>
        
                <Map containerStyles = {{height: '60%', width: '100%'}} address = {route.params.address} store_name = {route.params.store_name} rounded = {false}/>
                <TouchableOpacity style = {styles.backButton} onPress = {() => {navigation.goBack()}}>
                    <Icon name = "chevron-left" size = {30}></Icon>
                </TouchableOpacity>
          
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
                <View>
                    <FlatList 
                        style = {styles.itemList}
                        data = {order_items} 
                        horizontal = {true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor = {item => item.id}
                        renderItem = {({item, id}) => {    
                            return (
                                <OrderItemImage key = {id} image = {item.item.image} count = {item.quantity_num}/>
                            )    
                        }}
                    />
                </View>
                
                <BigButton color="green" text = "Accept Order" onPressAction = {() => acceptOrderAction()}/> 
              
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    itemList: {
        marginTop: 30,
        marginRight: 20,
        display: 'flex',
        height: 80,
        width: '90%',
        bottom: 0,
        left: 20,
        right: 20
    },
    backButton: {
        position: 'absolute',
        top: 55,
        left: 25
    },  
    textStyle:{
        fontSize:30
    },
    screen: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },  
    bottomSection: {
        position: 'absolute',
        left: 0, 
        right: 0,
        bottom: 0,
        borderRadius: 10,
        display: 'flex',
        height: '50%',
        width: '100%',
        zIndex: 5,
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
    }
})

let mapStateToProps = (state) => {
    return({
        orderItems: state.orders.order_items,
        current_order: state.orders.current_order,
        coords: state.stores.store_location
    })
}
export default connect(mapStateToProps, {getActiveOrders, getOrderItems, acceptOrder, storeLocation})(AcceptOrderScreen)