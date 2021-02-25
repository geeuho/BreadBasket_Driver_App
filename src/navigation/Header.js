import React from 'react'
import { View } from 'react-native'
import {Appbar} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => {

    let handleMenu = () => {
        props.navigation.openDrawer()
    }

    let goSettings = () => {
        props.navigation.navigate("Settings")
    }

    return (
        <Appbar.Header>
            <Appbar.Action icon = "menu" onPress = {() => handleMenu()}> 
            </Appbar.Action> 
            <Appbar.Content title = {props.title}/>
            <Appbar.Action icon = "dots-vertical" onPress = {() => goSettings()}/>
        </Appbar.Header>
    )
}

export default Header