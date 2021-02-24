import React from 'react'
import {Button } from 'react-native'
import {Appbar} from 'react-native-paper'

const Header = props => {

    let handleMenu = () => {
        props.navigation.openDrawer()
    }

    let goSettings = () => {
        props.navigation.navigate("Settings")
    }

    return (
        <Appbar.Header>
            <Appbar.Action onPress = {() => handleMenu()}>
                
            </Appbar.Action> 
            <Appbar.Content title = {props.title}/>
            <Appbar.Action icon = "dots-vertical" onPress = {() => goSettings()}/>
        </Appbar.Header>
    )
}

export default Header