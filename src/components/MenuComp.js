import React from 'react'
import {View} from 'react-native'
import {Menu, Button, Divider} from 'react-native-paper'

const MenuComp = props => {
    
    console.log(props)
    return (
        <View>
            <Menu 
                visible = {props.visible}
                >
                <Menu.Item icon = "redo"/>
                <Menu.Item icon="undo" />
                <Divider/>
                <Menu.Item icon="content-cut" />

            </Menu>
        </View>
    )
}

export default MenuComp