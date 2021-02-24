import React from 'react'
import Header from '../navigation/Header'
import Box from '../components/Box'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import {connect} from 'react-redux'
import {getStores, getActiveOrders} from '../actions'



class HomeScreen extends React.Component {
    
    componentDidMount(){
        this.props.getStores()
        this.props.getActiveOrders()
        console.log(this.props.orders.active_orders[1], 'first order')
    } 
    
    render(){
        return (
            <View>
            <Header navigation = {this.props.navigation} title = {'Home'}/>
            <SafeAreaView>
                
                <Box navigation = {this.props.navigation} title = "Current Orders">

                    <TouchableOpacity style={styles.orders} onPress={() => {
                        this.props.navigation.navigate('Orders')
                    }}>
                        <Text style={styles.textStyle}>Active Orders</Text>
                    </TouchableOpacity>
    
                </Box>
                <TouchableOpacity style={styles.margin} onPress = {() => {
                    this.props.navigation.navigate('Profile')
                }}>
                    <Text style ={styles.textStyle}>To Profile Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => console.log(this.props.stores)}>
                    <Text style = {styles.textStyle}>Current Stores</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log(this.props.orders)}>
                    <Text style={styles.textStyle}>Current Orders</Text>
                </TouchableOpacity>
            </SafeAreaView>

            </View>
        )

    }

}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30
    },
    margin: {
        marginVertical: 50
    }
})

let mapStateToProps = state => {
    return({
        stores: state.stores,
        orders: state.orders
    })
}

export default connect(mapStateToProps, {getStores, getActiveOrders})(HomeScreen)