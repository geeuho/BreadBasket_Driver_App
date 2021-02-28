import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import { Provider as StoreProvider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor} from './src/store'

import Geolocation from '@react-native-community/geolocation'

import mainDrawer from './src/navigation/mainDrawer'
import orderDrawer from './src/navigation/orderDrawer'
import Header from './src/header/Header'

//Main Screens
import AcceptOrderScreen from "./src/screens/AcceptOrderScreen"
import ProfileScreen from "./src/screens/ProfileScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import SettingsScreen from "./src/screens/SettingsScreen"
import EarningsScreen from "./src/screens/EarningsScreen"

//Order Screens
import OrderNavScreen from './src/screens/OrderNavScreen'
import OrderShopScreen from './src/screens/OrderShopScreen'
import ItemScanScreen from './src/screens/ItemScanScreen'
import CantFindScreen from './src/screens/CantFindScreen'

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3cb371',
    accent: 'black'
  }
}

class App extends React.Component{
  componentDidMount(){
    Geolocation.setRNConfiguration({
      "skipPermissionRequests": false,
      "authorizationLevel": 'whenInUse'
    })
  }
  render(){
    return(
      <StoreProvider store = {store}>
        <PersistGate persistor = {persistor}>
          <PaperProvider theme = {theme}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName = "Home" screenOptions = {{header:({navigation, previous}) => {
                <Header navigation = {navigation} previous = {previous}/>
              }}}>
                <Stack.Screen name = "Home" component = {mainDrawer} />
                <Stack.Screen name = "Profile" component={ProfileScreen} />
                <Stack.Screen name = "Orders" component={OrdersScreen} />
                <Stack.Screen name = "Settings" component = {SettingsScreen} />
                <Stack.Screen name = "AcceptOrder" component = {AcceptOrderScreen} />
                <Stack.Screen name = "Earnings" component={EarningsScreen} />
                <Stack.Screen name = "OrderNav" component={orderDrawer} />
                <Stack.Screen name = "OrderShop" component = {orderDrawer}/> 
                <Stack.Screen name = "ItemScan" component = {ItemScanScreen}/>
                <Stack.Screen name = "CantFind" component = {CantFindScreen}/>
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
      
    )

  }
}

export default App;
