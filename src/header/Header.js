import React from 'react'
import { View } from 'react-native'
import {Appbar} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = props => {

    let navFunction = () => {
        if(props.icon === "menu"){
            return () => {
                props.navigation.openDrawer()
            }
        } else {
            return() => {
                props.navigation.navigate("Home")
            }
        }
    }

    let goSettings = () => {
        props.navigation.navigate("Settings")
    }

    return (
        <Appbar.Header>
            <Appbar.Action icon = {props.icon} onPress = {navFunction()}> 
            </Appbar.Action> 
            <Appbar.Content title = {props.title}/>
            <Appbar.Action icon = "dots-vertical" onPress = {() => goSettings()}/>
        </Appbar.Header>
    )
}

export default Header