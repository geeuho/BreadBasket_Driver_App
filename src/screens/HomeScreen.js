import React, {useEffect} from 'react'
import Header from "../navigation/Header"
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {getStores} from '../actions'

const HomeScreen = props => {
    useEffect(()=> {
        props.getStores()
    }, [])
    return (
        <View>
            <Header navigation = {props.navigation}/>
            <Text style={styles.textStyle}>Home</Text>
            <TouchableOpacity style = {styles.margin} onPress = {() => {
                props.navigation.navigate('Order')   
            }}>
                <Text style={styles.textStyle}>To Order Page</Text>
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

export default connect(mapStateToProps, {getStores})(HomeScreen)