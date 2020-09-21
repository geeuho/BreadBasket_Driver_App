import React from 'react'
import {Appbar} from 'react-native-paper'

const Header = props => {

    let handleMenu = () => {
        props.navigation.openDrawer()
    }

    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress = {() => handleMenu()}/> 
            <Appbar.Content title = "Title"/>
            <Appbar.Action icon = "dots-vertical"/>
        </Appbar.Header>
    )
}

export default Header