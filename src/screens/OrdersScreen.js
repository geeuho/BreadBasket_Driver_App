import React from 'react'
import Header from "../header/Header"
import OrderBox from '../components/OrderBox'
import { connect } from 'react-redux'
import {getActiveOrders} from '../actions'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

class OrdersScreen extends React.Component {

    componentDidMount(){
        // this.props.getActiveOrders()
    }

    renderOrderBoxes = () => {
        return this.props.activeOrders.map((order, id) => {
            let attributes = order['attributes']
            let {tip, payment, store} = attributes
            let total = `$${(tip + payment).toFixed(2)}`
            let unitCount = attributes.order_items.reduce((sum, item) => {
                return sum + item.quantity_num
            }, 0)
            let store_id = store.id
            let {logo, address, name} = this.props.stores.find(store => store.attributes.id === store_id).attributes
            let store_address = `${address.street + ' • ' + address.city + ', ' + address.state}`
            return (
                <TouchableOpacity key = {id} onPress={() => this.props.navigation.push("AcceptOrder", {
                    orderId: order.id,
                    total: total,
                    tip: attributes.tip,
                    payment: attributes.payment,
                    orderCount: attributes.order_items.length,
                    unitCount: unitCount,
                    address: address
                  })}
                >
                    <OrderBox navigation = {this.props.navigation} name = {name} address = {store_address} store_img={logo} total = {total} store_name = {attributes.store.name} orderCount = {attributes.order_items.length} unitCount = {unitCount} />
                </TouchableOpacity>
            )
        })
    }

    render(){
        return(
            <View style = {styles.screen}>
                <Header icon = "chevron-left" navigation={this.props.navigation}  title = {"Active Orders"}/>
                <ScrollView>
                    {this.renderOrderBoxes()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        paddingBottom: 30
    },
    textStyle:{
        fontSize:30
    }
})

let mapStateToProps = (state) => {
    return({
        activeOrders: state.orders.active_orders,
        stores: state.stores.storesList
    })
}
export default connect(mapStateToProps, {getActiveOrders})(OrdersScreen)