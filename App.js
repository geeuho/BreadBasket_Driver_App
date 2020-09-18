import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper'
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import OrderScreen from "./src/screens/OrderScreen";

const Stack = createStackNavigator()

function App(){
  return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name= "Profile" component= {ProfileScreen} />
          <Stack.Screen name= "Order" component= {OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}


export default App;
