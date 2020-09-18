import React from 'react'
import {View} from 'react-native'
import {Menu, Button, Divider} from 'react-native-paper'

const MenuComp = () => {
    const [visible, setVisible] = React.useState(false);
    let openMenu = () => setVisible(true)
    let closeMenu = () => setVisible(false)
    return (
        <View>
            <Menu 
                visible = {visible}
                onDismiss={closeMenu}
                anchor = {<Button onPress = {openMenu}></Button>}>
                <Menu.Item icon = "redo"/>
                <Menu.Item icon="undo" />
                <Divider/>
                <Menu.Item icon="content-cut" />

            </Menu>
        </View>
    )
}

export default MenuComp