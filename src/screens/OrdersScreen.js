import React from 'react'
import Header from "../navigation/Header"
import OrderBox from '../components/OrderBox'
import { connect } from 'react-redux'
import {getActiveOrders} from '../actions'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class OrderScreen extends React.Component {

    componentDidMount(){
        
    }



    render(){
        return(
            <View>
                <Header navigation={this.props.navigation} title = {"Active Orders"}/>
                <OrderBox title = "$13.85"/> 
                <OrderBox title = "$24.35"/>
                <OrderBox title = "$24.35"/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
})

let mapStateToProps = state => {
    return({
        activeOrders: state.order.active_orders
    })
}
export default connect(mapStateToProps, {getActiveOrders})(OrderScreen)