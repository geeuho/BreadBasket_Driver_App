import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import { startOrder } from '../actions'
import Header from '../header/Header'
import NavInfoSection from '../components/NavInfoSection'
import BigButton from '../components/BigButton'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class OrderNavScreen extends React.Component {

    componentDidMount(){
        // console.log(this.props.currentOrder)
    }
    
    startOrder = () =>{
        this.props.navigation.navigate("OrderShop")
        this.props.startOrder()
    }

    // Need to get order info to check address and order details
    // Need to get map and navigate button to get app to maps for navigation from current to location
    // Need to get current location to check whether its right location 
    // Need start shopping order button when current location is near store 

    render(){
        let current_order= this.props.currentOrder
        return(
            <View>
                <Header icon = "menu" styles = {{'backgroundColor': '#98fb98'}} navigation={this.props.navigation} message = {true} />
                <View style = {styles.view}>

                    <Text style = {styles.header}>
                        Head to Store
                    </Text>

                    <View style = {styles.map}>
                    </View>

                    <Text style = {styles.store_name}>
                        {current_order.attributes.store.name}
                    </Text>
                    <Text style = {styles.store_address}>
                        {`${current_order.address.street + ' ' + current_order.address.city + ', ' + current_order.address.state}`}
                    </Text>
                    <View style = {styles.button_section}>
                        <BigButton color = "gray" text = "Navigate"/> 
                    </View>
                    <View style = {styles.border}></View>
                    <Text style = {styles.order_header}>Order</Text>
                    <NavInfoSection letter = "A" name = "Allen Shin" order_count = {current_order.order_count} unit_count = {current_order.unit_count}/> 
                    <View style = {{marginTop: 145}}>
                        <BigButton color= "green" text = "Start Order" onPressAction = {() => this.startOrder()}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 30
    },
    view: {
        padding: 25, 
        height: '100%'
    },
    map: {
        backgroundColor: 'blue',
        width: '100%',
        height: 200,
        marginTop: 20,
        borderRadius: 10
        
    },
    store_name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    store_address: {
        color: 'gray',
        marginTop: 5
    },
    button_section: {
        marginTop: 10,
        marginBottom: 10
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    order_header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    }

})

let mapStateToProps = state => {
    return{
        currentOrder: state.orders.current_order
    }
}

export default connect(mapStateToProps, {startOrder})(OrderNavScreen)