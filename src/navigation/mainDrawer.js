import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen";
import SettingsScreen from "../screens/SettingsScreen"
import EarningsScreen from "../screens/EarningsScreen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Drawer = createDrawerNavigator();

const mainDrawer = () => {
    return(
        <Drawer.Navigator initialRouteName = "Home">
            <Drawer.Screen name = "Home" component = {HomeScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "home" size = {25}/>}
                }}
            />
            <Drawer.Screen name = "Orders" component={OrdersScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "cart" size = {25}/>},
                    drawerLockMode: 'unlocked'
                }}
            />
            <Drawer.Screen name = "Profile" component={ProfileScreen}
                options = {{ 
                    drawerIcon: () => { return <Icon name = "account" size = {25}/>}
                }}
            />
            <Drawer.Screen name= "Earnings" component={EarningsScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "cash" size = {25}/>}
                }}
            />
            <Drawer.Screen name = "Settings" component = {SettingsScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "cellphone-settings" size = {25}/>}
                }}
            />
        </Drawer.Navigator>
    )
}

export default mainDrawer