import React from 'react'
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
            <Appbar.Action icon="menu" onPress = {() => handleMenu()}/> 
            <Appbar.Content title = {props.title}/>
            <Appbar.Action icon = "dots-vertical" onPress = {() => goSettings()}/>
        </Appbar.Header>
    )
}

export default Header