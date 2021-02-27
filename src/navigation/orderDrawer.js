import React, {useEffect} from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"
import {connect} from 'react-redux'
import OrderNavScreen from "../screens/OrderNavScreen";
import OrderShopScreen from "../screens/OrderShopScreen";
import OrderDeliveryScreen from "../screens/OrderDeliveryScreen";

import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import OrderTutorialScreen from "../screens/OrderTutorialScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen"
import EarningsScreen from "../screens/EarningsScreen"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Drawer = createDrawerNavigator();


const orderDrawer = ({currentOrderScreen}) => {
    useEffect(() => {
        console.log(currentOrderScreen)
    })
    
    return(
        <Drawer.Navigator initialRouteName = "OrderNav">
            {/* {renderCurrentOrder(currentOrderScreen)} */}
            {
                currentOrderScreen === 'nav' ? 
                <Drawer.Screen name = "OrderNav" component={OrderNavScreen}
                    options = {{ 
                        drawerIcon: () => { return <Icon name = "cart" size = {25}/>},
                        title: 'Return To Order'
                    }}
                />
                : 
                null
            }
            {
                currentOrderScreen === 'shop' ? 
                <Drawer.Screen name = "OrderShop" component={OrderShopScreen}
                    options = {{ 
                        drawerIcon: () => { return <Icon name = "account" size = {25}/>}
                    }}
                />
                : 
                null
            }
            {
                currentOrderScreen === 'delivery' ? 
                <Drawer.Screen name = "OrderDelivery" component={OrderDeliveryScreen}
                    options = {{ 
                        drawerIcon: () => { return <Icon name = "account" size = {25}/>}
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
        currentOrderScreen: state.orders.current_order_screen
    }
}

export default connect(mapStateToProps)(orderDrawer)