import React, {useEffect} from 'react'
import Header from "../navigation/Header"
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { Headline } from 'react-native-paper'
import {connect} from 'react-redux'
import {getStores, getActiveOrders} from '../actions'

const HomeScreen = props => {
    useEffect(()=> {
        props.getStores()
        props.getActiveOrders()
        console.log(props.stores)
    }, [])
    return (
        <View >
            <Header navigation = {props.navigation} title = {'Home'}/>
            <Headline style = {styles.header}>Home</Headline>
            <TouchableOpacity style = {styles.margin} onPress = {() => {
                props.navigation.navigate('Order')   
            }}>
                <Text style={styles.textStyle}>Current Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.margin} onPress = {() => {
                props.navigation.navigate('Profile')
            }}>
                <Text style ={styles.textStyle}>To Profile Page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => console.log(props.stores)}>
                <Text style = {styles.textStyle}>Press me!</Text>
            </TouchableOpacity>
        </View>
    )
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