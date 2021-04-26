import React from 'react'
import Header from "../header/Header"
import OrderBox from '../components/OrderBox'
import { connect } from 'react-redux'
import axios from 'axios'
import {getActiveOrders, storeLocation} from '../actions'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

class OrdersScreen extends React.Component {

    componentDidMount(){
        this.props.getActiveOrders()
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
                <TouchableOpacity key = {id} onPress={async() => {

                    let queryAddress = `${address.street.split(' ').join('+') + '%2c+' + address.city.split(' ').join('+') + '+' + address.state}`
                    console.log(queryAddress, 'QUERY ADRESSSS')
                    let response = await axios.get(`https://api.geocod.io/v1.6/geocode?q=${queryAddress}&api_key=6c65d05d6b6cc6665c7c3bdf70cf1b55f672506`).then(
                        (response)=> {
                            let current = response.data.results[0].location
                            console.log(current, current['lat'], current['lng'],'current')
                            this.props.storeLocation(current.lat, current.lng)
                        }
                    ).catch(function(error){
                        console.log(error)
                    })
                    this.props.navigation.push("AcceptOrder", {
                        orderId: order.id,
                        total: total,
                        tip: attributes.tip,
                        payment: attributes.payment,
                        orderCount: attributes.order_items.length,
                        unitCount: unitCount,
                        address: address,
                        store_name: name
                        }
                    )
                }}
                >
                    <OrderBox navigation = {this.props.navigation} name = {name} address = {store_address} store_img={logo} total = {total} store_name = {attributes.store.name} orderCount = {attributes.order_items.length} unitCount = {unitCount} />
                </TouchableOpacity>
            )
        })
    }

    render(){
        console.log(this.props.activeOrders)
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
export default connect(mapStateToProps, {getActiveOrders, storeLocation})(OrdersScreen)