import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/loginScreen";
import BarberRegistrationScreen from "../../screens/barberRegistrationScreen";
import CustomerRegistrationScreen from "../../screens/customerRegistrationScreen";
import customerHomeScreen from "../../screens/customerHomeScreen";
import CustomerHomeScreen from "../../screens/customerHomeScreen";

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
        gestureEnabled: false,
        // Remove the back button and prevent gestures
        headerLeft: () => null,
      }}
      name="customerHome"
      component={CustomerHomeScreen}
    />
  </Stack.Navigator>
);

}

export default MainStackNavigator