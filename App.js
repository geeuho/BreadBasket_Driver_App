import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme, DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import Header from "./src/components/Header"

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import OrderScreen from "./src/screens/OrderScreen";


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

const App = () => {
  return(
    <PaperProvider theme = {theme}>
      <NavigationContainer>
        <Header/>
        <Drawer.Navigator initialRouteName = "Home">
          <Drawer.Screen name = "Home" component = {HomeScreen}/>
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Order" component={OrderScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
        {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name = "Home" 
            component = {HomeScreen}
            // options = {{
            //   headerRight: ()=>  (
            //     <Button title = "button" onPress = {() => alert('This is a button!')}/>
            //   )
            // }}
          />
          <Stack.Screen name= "Profile" component= {ProfileScreen} />
          <Stack.Screen name= "Order" component= {OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </PaperProvider>
  )
}

export default App;
