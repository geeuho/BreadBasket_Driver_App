import React from 'react'
import {Appbar} from 'react-native-paper'
import Menu from '../components/MenuComp'

const Header = () => {
    
    let goBack = () =>  console.log("Went back")
    let handleMenu = () => {

    }
    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={handleMenu}>
                <Menu></Menu>    
            </Appbar.Action>
            <Appbar.Content title = "Title"/>
            <Appbar.Action icon = "dots-vertical" onPress = {handleMenu}/>
        </Appbar.Header>
    )
}

export default Header