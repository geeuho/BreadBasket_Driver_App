import 'react-native-gesture-handler'
import React, {useEffect, useState} from 'react'
import { Button } from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme, DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import { Provider as StoreProvider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor} from './src/store'
import {Appbar} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import drawerNavigator from './src/navigation/drawerNavigator'
import Header from './src/header/Header'
import OrderScreen from "./src/screens/OrderScreen"
import ProfileScreen from "./src/screens/ProfileScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import SettingsScreen from "./src/screens/SettingsScreen"
import EarningsScreen from "./src/screens/EarningsScreen"

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'lawngreen',
    accent: 'black'
  }
}

class App extends React.Component{

  render(){
    return(
      <StoreProvider store = {store}>
        <PersistGate persistor = {persistor}>
          <PaperProvider theme = {theme}>
            <NavigationContainer>
              
              <Stack.Navigator initialRouteName = "Home" screenOptions = {{header:({navigation, previous}) => {
                <Header navigation = {navigation} previous = {previous}/>
              }}}>
                <Stack.Screen name = "Home" component = {drawerNavigator} />
                <Stack.Screen name = "Profile" component={ProfileScreen} />
                <Stack.Screen name = "Orders" component={OrdersScreen} />
                <Stack.Screen name = "Settings" component = {SettingsScreen} />
                <Stack.Screen name = "Order" component = {OrderScreen} />
                <Stack.Screen name = "Earnings" component={EarningsScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
        //   /* <NavigationContainer>
        //   <Stack.Navigator>
        //     <Stack.Screen 
        //       name = "Home" 
        //       component = {HomeScreen}
        //       // options = {{
        //       //   headerRight: ()=>  (
        //       //     <Button title = "button" onPress = {() => alert('This is a button!')}/>
        //       //   )
        //       // }}
        //     />
        //     <Stack.Screen name= "Profile" component= {ProfileScreen} />
        //     <Stack.Screen name= "Order" component= {OrderScreen} />
        //   </Stack.Navigator>
        // </NavigationContainer> */
      
        )

  }
}

export default App;
