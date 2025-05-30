import { StyleSheet, Text, View,Image,ImageBackground, TextInput } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import BackgroundImage from '../src/assets/background-img'
import { s } from 'react-native-size-matters'

const BarberRegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('../src/assets/fonts/Montserrat-SemiBold.ttf'),
  })
  return (
    <ImageBackground
      style={styles.image}
      source={require("../src/assets/background-img.png")}
    >
      <Text style={styles.title}>Barber Registration</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="default"
        placeholder="Salon Name"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        keyboardType="default"
        placeholder="Email"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        keyboardType="default"
        placeholder="Password"
      ></TextInput>
    </ImageBackground>
  );
}

export default  BarberRegistrationScreen 


const styles = StyleSheet.create({
    image:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    title:{
      fontFamily:'Montserrat',
      backgroundColor:'white',
      borderRadius:15,
      padding:10,
      elevation:10,
      fontSize:20
    }
    ,
    textInput: {
    height: s(35),
    width: "80%",
    borderColor: "grey",
    color: "black",
    borderRadius: 20,
    borderWidth: 0.5,
    marginVertical: 20,
    backgroundColor:'white',
    elevation: 20,
    padding:11
  },
})