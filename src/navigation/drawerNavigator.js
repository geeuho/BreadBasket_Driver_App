import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"

import OrderScreen from "../screens/OrderScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen";
import SettingsScreen from "../screens/SettingsScreen"
import EarningsScreen from "../screens/EarningsScreen"


const Drawer = createDrawerNavigator();

const drawerNavigator = () => {
    return(
        <Drawer.Navigator initialRouteName = "Home">
            <Drawer.Screen name = "Home" component = {HomeScreen}/>
            <Drawer.Screen name = "Profile" component={ProfileScreen} />
            <Drawer.Screen name = "Orders" component={OrdersScreen} />
            <Drawer.Screen name = "Settings" component = {SettingsScreen} />
            <Drawer.Screen name= "Earnings" component={EarningsScreen} />
        </Drawer.Navigator>
    )
}

export default drawerNavigator