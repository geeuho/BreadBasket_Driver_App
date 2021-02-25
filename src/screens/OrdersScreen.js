import React from 'react'
import Header from "../navigation/Header"
import OrderBox from '../components/OrderBox'
import { connect } from 'react-redux'
import {getActiveOrders} from '../actions'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class OrdersScreen extends React.Component {

    componentDidMount(){
        this.props.getActiveOrders()
        console.log(this.props.activeOrders[0].attributes.store)

    }

    renderOrderBoxes = () => {
        return this.props.activeOrders.map(order => {
            let attributes = order['attributes']
            let tip = attributes.tip
            let payment = attributes.payment
            let total = `$${(tip + payment).toFixed(2)}`
            let unitCount = attributes.order_items.reduce((sum, item) => {
                return sum + item.quantity_num
            }, 0)
            let logo = attributes.store.logo
            let address = attributes.store.address
            return (
                <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Order')}}>
                    <OrderBox navigation = {this.props.navigation} address = {address} store_img={logo} total = {total} store_name = {attributes.store.name} orderCount = {attributes.order_items.length} unitCount = {unitCount} />
                </TouchableOpacity>
            )
        })
    }

    render(){
        return(
            <View>
                <Header navigation={this.props.navigation} title = {"Active Orders"}/>
                {this.renderOrderBoxes()}
                
            </View>
        )
    }
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
export default connect(mapStateToProps, {getActiveOrders})(OrdersScreen)