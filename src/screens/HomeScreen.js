import React, {useEffect} from 'react'
import Header from "../navigation/Header"
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { Card } from 'react-native-paper'
import {connect} from 'react-redux'
import {getStores, getActiveOrders} from '../actions'

class HomeScreen extends React.Component {
    componentDidMount(){
        this.props.getStores()
        this.props.getActiveOrders()
    }
    
    render(){
        return (
            <View >
                <Header navigation = {this.props.navigation} title = {'Home'}/>
                
                <Card>
                    <Card.Title title = "Current Orders"></Card.Title>
                    <Card.Content>
                        <TouchableOpacity style = {styles.orders} onPress = {() => {
                            this.props.navigation.navigate('Order')   
                        }}>
                            <Text style={styles.textStyle}>Current Orders</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
                <TouchableOpacity style={styles.margin} onPress = {() => {
                    this.props.navigation.navigate('Profile')
                }}>
                    <Text style ={styles.textStyle}>To Profile Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => console.log(this.props.stores.storesList[0])}>
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
        stores: state.stores
    })
}

export default connect(mapStateToProps, {getStores, getActiveOrders})(HomeScreen)