import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/loginScreen";
import BarberRegistrationScreen from "../../screens/barberRegistrationScreen";
import CustomerRegistrationScreen from "../../screens/customerRegistrationScreen";
import customerHomeScreen from "../../screens/customerHomeScreen";
import CustomerHomeScreen from "../../screens/customerHomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabsNavigator from "./BottomTabsNavigator";

const Stack = createStackNavigator();


function MainStackNavigator(){
return (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="login"
      component={LoginScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="barberReg"
      component={BarberRegistrationScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="customerReg"
      component={CustomerRegistrationScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="Home" 
      component={BottomTabsNavigator}
    />
    
  </Stack.Navigator>
  

  
);

}

export default MainStackNavigator