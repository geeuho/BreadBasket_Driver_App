import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import OrderScreen from "./src/screens/OrderScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Order: OrderScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
)

export default createAppContainer(navigator)
