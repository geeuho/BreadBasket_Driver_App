import React from 'react'
import Header from "../navigation/Header"
import OrderBox from '../components/OrderBox'
import { connect } from 'react-redux'
import {getActiveOrders} from '../actions'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class OrderScreen extends React.Component {

    componentDidMount(){
        
    }

    renderOrderBoxes = () => {
        return this.props.activeOrders.map(order => {
            
            let attributes = order.attributes
            let total = attributes.tip + attributes.payment
            console.log(attributes, total)
            // return <OrderBox total = {total}/>
        })
    }

    render(){
        return(
            <View>
                <Header navigation={this.props.navigation} title = {"Active Orders"}/>
                <Text>Order</Text>
                
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
export default connect(mapStateToProps, {getActiveOrders})(OrderScreen)