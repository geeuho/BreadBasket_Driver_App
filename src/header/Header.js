import React from 'react'
import { Appbar } from 'react-native-paper'


const Header = props => {

    let navFunction = () => {
        if(props.icon === "menu"){
            return () => {
                props.navigation.openDrawer()
            }
        } else {
            return() => {
                props.navigation.goBack()
            }
        }
    }

    let goSettings = () => {
        props.navigation.push("Settings")
    }

    return (
        <Appbar.Header style = {props.styles? props.styles: ""}>
            <Appbar.Action icon = {props.icon} onPress = {navFunction()}> 
            </Appbar.Action> 
            <Appbar.Content title = {props.previous ? "Home" : props.title}/>
            {
                props.title === "Settings"?
                null
                :
                <Appbar.Action icon = "dots-vertical" onPress = {() => goSettings()}/>
            }
        </Appbar.Header>
    )
}


export default Header