import { StyleSheet, Text, View,Image,ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import BackgroundImage from '../src/assets/background-img'
import { s,vs } from 'react-native-size-matters'
import LocationComp from '../src/components/location'

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
        secureTextEntry={true}
      ></TextInput>
      <LocationComp />
      <TouchableOpacity style={styles.detect}>
        <Text style={{ fontFamily: "Montserrat" }}>Detect Location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.register}>
        <Text style={{ fontFamily: "Montserrat",fontSize:20,color:'white' }}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default  BarberRegistrationScreen 


const styles = StyleSheet.create({
  register:{
    width:'70%',
    height:vs(40),
    backgroundColor: '#f2533b',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    elevation:10,
  },
  detect:{
    width:'40%',
    height:vs(20),
    backgroundColor: 'white',
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    elevation:10,
  },
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
      marginBottom:30,
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