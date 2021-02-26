import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"

import EarningsScreen from "../screens/EarningsScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";
import PaymentCardScreen from "../screens/PaymentCardScreen";
import PaymentInfoScreen from '../screens/PaymentInfo'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Drawer = createDrawerNavigator();

const earningsDrawer = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Earnings" component = {EarningsScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "home" size = {25}/>}
                }}
            />
            <Drawer.Screen name = "Payment Method" component={PaymentMethodScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "cart" size = {25}/>},
                    drawerLockMode: 'unlocked'
                }}
            />
            <Drawer.Screen name = "Payment Card" component={PaymentCardScreen}
                options = {{ 
                    drawerIcon: () => { return <Icon name = "account" size = {25}/>}
                }}
            />
            <Drawer.Screen name = "Payment Info" component={PaymentInfoScreen}
                options = {{ 
                    drawerIcon: () => { return <Icon name = "account" size = {25}/>}
                }}
            />
        </Drawer.Navigator>
    )
}

export default earningsDrawer