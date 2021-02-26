import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"

import OrdersScreen from "../screens/OrdersScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import OrderTutorialScreen from "../screens/OrderTutorialScreen";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Drawer = createDrawerNavigator();

const orderDrawer = () => {
    return(
        <Drawer.Navigator >
            <Drawer.Screen name = "Current Orders" component = {OrdersScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "home" size = {25}/>}
                }}
            />
            <Drawer.Screen name = "Order History" component={OrderHistoryScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "cart" size = {25}/>},
                    drawerLockMode: 'unlocked'
                }}
            />
            <Drawer.Screen name = "Order Tutorial" component={OrderTutorialScreen}
                options = {{ 
                    drawerIcon: () => { return <Icon name = "account" size = {25}/>}
                }}
            />
        </Drawer.Navigator>
    )
}

export default orderDrawer