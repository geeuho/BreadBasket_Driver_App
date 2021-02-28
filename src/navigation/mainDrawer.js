import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"
import { connect } from 'react-redux'

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen";
import OrderNavScreen from "../screens/OrderNavScreen";
import OrderShopScreen from "../screens/OrderShopScreen";
import OrderDeliveryScreen from "../screens/OrderDeliveryScreen";
import SettingsScreen from "../screens/SettingsScreen"
import EarningsScreen from "../screens/EarningsScreen"

import earningsDrawer from './earningsDrawer'
import orderDrawer from './orderDrawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Drawer = createDrawerNavigator();

const mainDrawer = ({currentOrderScreen}) => {
    return(
        <Drawer.Navigator initialRouteName = "Home">
            <Drawer.Screen name = "Home" component = {HomeScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "home" size = {25}/>},
                    
                }}
            />
            {
                currentOrderScreen === 'nav' ? 
                <Drawer.Screen name = "OrderNav" component={OrderNavScreen}
                    options = {{ 
                        drawerIcon: () => { return <Icon name = "store" size = {25}/>},
                        title: 'Go to Store'
                    }}
                />
                : 
                null
            }
            {
                currentOrderScreen === 'shop' ? 
                <Drawer.Screen name = "OrderShop" component={OrderShopScreen}
                    options = {{ 
                        drawerIcon: () => { return <Icon name = "shopping" size = {25}/>},
                        title: 'Complete Order'
                    }}
                />
                : 
                nullf
            }
            {
                currentOrderScreen === 'delivery' ? 
                <Drawer.Screen name = "OrderDelivery" component={OrderDeliveryScreen}
                    options = {{ 
                        drawerIcon: () => { return <Icon name = "truck-fast" size = {25}/>},
                        title: 'Complete Delivery'
                    }}
                />
                : 
                null
            }
            {
                currentOrderScreen === null ? 
                <Drawer.Screen name = "Orders" component={OrdersScreen} 
                options = {{ 
                    drawerIcon: () => { return <Icon name = "cart" size = {25}/>},
                    drawerLockMode: 'unlocked'
                }}
                />
                :
                null
            }
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

let mapStateToProps = state => {
    return{
        currentOrderScreen: state.orders.current_order.screen
    }
}

export default connect(mapStateToProps)(mainDrawer)