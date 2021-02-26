import React from 'react'
import Header from '../header/Header'
import Box from '../components/Box'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import {connect} from 'react-redux'
import {getStores, getActiveOrders} from '../actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



class HomeScreen extends React.Component {
    constructor(props){
        super()
        this.state = {
            active_orders_length: props.active_orders.length
        }
    }
    
    componentDidMount(){
        this.props.getStores()
        this.props.getActiveOrders()
        console.log(this.props.active_orders)
    } 

    componentDidUpdate(prevState){
        if(this.props.active_orders !== prevState.active_orders){
            this.setState({
                active_orders_length: this.props.active_orders.length
            })
        }
    }
    

    render(){
        return (
            <View>
                <Header icon = "menu" navigation = {this.props.navigation} title = {'Home'}/>
                <SafeAreaView>
                    
                        <TouchableOpacity style={styles.orders} onPress={() => {
                            this.props.navigation.navigate('Orders')
                        }}>
                            <Box navigation = {this.props.navigation} title = "Current Orders">
                                <View style = {styles.row}>
                                    <Icon name = "cart" size = {30}></Icon>
                                    <Text style={{fontSize: 30 }}>{this.state.active_orders_length > 0 ? `${this.state.active_orders_length} Orders Available` : 'No Active Orders'}</Text>
                                </View>
                                <Text style= {{marginTop: 5}}>{this.state.active_orders_length > 0 ? "View Orders" : "We'll notify you when orders are available"}</Text>
                            </Box>
                        </TouchableOpacity>
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
    row: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    margin: {
        marginVertical: 50
    }
})

let mapStateToProps = state => {
    return({
        stores: state.stores,
        active_orders: state.orders.active_orders
    })
}

export default connect(mapStateToProps, {getStores, getActiveOrders})(HomeScreen)