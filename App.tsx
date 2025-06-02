import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LoginScreen from './screens/loginScreen'
import BarberRegistrationScreen from './screens/barberRegistrationScreen'
import LocationComp from './src/components/location'

const App = () => {
  return(
    <BarberRegistrationScreen />
  );
}
export default App;
