import React, {useState} from 'react'
import Header from '../navigation/Header'
import Box from '../components/Box'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {Card} from 'react-native-paper'
import {connect} from 'react-redux'
import {getStores, getActiveOrders} from '../actions'
import axios from 'axios'

class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            stores: []
        }
    }
    
    componentDidMount(){
        this.props.getStores()
    }
    
    render(){
        return (
            <View >
                <Header navigation = {this.props.navigation} title = {'Home'}/>
                
                <Box navigation = {this.props.navigation} title = "Current Orders">
                    <Card.Content>
                        <TouchableOpacity style={styles.orders} onPress={() => {
                            this.props.navigation.navigate('Order')
                        }}>
                            <Text style={styles.textStyle}>Nice Orders</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Box>
                <TouchableOpacity style={styles.margin} onPress = {() => {
                    this.props.navigation.navigate('Profile')
                }}>
                    <Text style ={styles.textStyle}>To Profile Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => console.log('hi', this.props.stores)}>
                    <Text style = {styles.textStyle}>Press me!</Text>
                </TouchableOpacity>
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