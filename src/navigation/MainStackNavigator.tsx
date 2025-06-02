import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/loginScreen";
import BarberRegistrationScreen from "../../screens/barberRegistrationScreen";

const Stack = createStackNavigator();

function MainStackNavigator(){
return (
  <Stack.Navigator>
    <Stack.Screen options= {{headerShown:false}}name="login" component={LoginScreen} />
    <Stack.Screen options= {{headerShown:false}}
      name="barberReg"
      component={BarberRegistrationScreen}
    />
  </Stack.Navigator>
);

}

export default MainStackNavigator