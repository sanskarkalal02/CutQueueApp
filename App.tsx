import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LoginScreen from './screens/loginScreen'
import BarberRegistrationScreen from './screens/barberRegistrationScreen'
import LocationComp from './src/components/location'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './src/navigation/MainStackNavigator'
import LocationPickerScreen from './src/components/locationPicker'

const App = () => {
  return(
          // <LocationPickerScreen />
    
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}
export default App;
