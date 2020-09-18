import React from 'react'
import {Appbar} from 'react-native-paper'

const Header = () => {
    return (
        <Appbar.header>
            <Appbar.BackAction onPress = {goBack}/>
            <Appbar.Content title = "Title" subtitle = "Subtitle"/>
            <Appbar.Action icon = "dots-vertical" onPress = {handleMenu}/>
        </Appbar.header>
    )
}

export default Header