import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import OrderScreen from "../screens/OrderScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen";
import SettingsScreen from "../screens/SettingsScreen"
import EarningsScreen from "../screens/EarningsScreen"


const Stack = createStackNavigator();

const stackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {HomeScreen}/>
            <Stack.Screen name = "Profile" component={ProfileScreen} />
            <Stack.Screen name = "Orders" component={OrdersScreen} />
            <Stack.Screen name = "Settings" component = {SettingsScreen} />
            <Stack.Screen name= "Earnings" component={EarningsScreen} />
            <Stack.Screen name = "Order" component = {OrderScreen} />
        </Stack.Navigator>
    )
}

export {stackNavigator}