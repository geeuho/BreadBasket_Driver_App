import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme, DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import {Button} from 'react-native'
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import OrderScreen from "./src/screens/OrderScreen";
import Header from "./src/components/Header"

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

function App(){
  return(
    <PaperProvider theme = {theme}>
      <Header/>
      <NavigationContainer>
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
      </NavigationContainer>
    </PaperProvider>
  )
}


export default App;
