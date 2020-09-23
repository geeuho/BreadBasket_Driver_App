import 'react-native-gesture-handler'
import React, {useEffect, useState} from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme, DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import { Provider as StoreProvider, connect} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './src/store'
import {getStores, getItems} from './src/actions'

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import OrderScreen from "./src/screens/OrderScreen";
import SettingsScreen from "./src/screens/SettingsScreen"
import EarningsScreen from "./src/screens/EarningsScreen"


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

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
              <Drawer.Navigator initialRouteName = "Home">
                <Drawer.Screen name = "Home" component = {HomeScreen}/>
                <Drawer.Screen name = "Profile" component={ProfileScreen} />
                <Drawer.Screen name = "Order" component={OrderScreen} />
                <Drawer.Screen name = "Settings" component = {SettingsScreen} />
                <Drawer.Screen name="Earnings" component={EarningsScreen} />
              </Drawer.Navigator>
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
