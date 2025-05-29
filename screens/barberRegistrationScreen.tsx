import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import React from 'react'
import BackgroundImage from '../src/assets/background-img'
import { s } from 'react-native-size-matters'

const BarberRegistrationScreen = () => {
  return (
    <View>
      <ImageBackground style ={styles.image} source={require('../src/assets/background-img.png')}>
        


      </ImageBackground>
    </View>
  )
}

export default  BarberRegistrationScreen 


const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: "100%"
    }
})