import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground} from "react-native";
import { useState } from "react";
import LogoPic from '../src/assets/logoPic';
import BackgroundImage from "../src/assets/background-img";
import { s } from "react-native-size-matters";
import React from "react";
import { useFonts } from "expo-font";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function LoginScreen() {

const [fontsLoaded] = useFonts({
    'Montserrat': require('../src/assets/fonts/Montserrat-SemiBold.ttf'),
  })
const [password,setPassword] = useState("");
const [email,setEmail]  = useState("");
const {name,params} = useRoute();
const navigation = useNavigation<any>();

console.log(email +'   '+ password)

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../src/assets/background-img.png")}
      >
        <LogoPic style={styles.logo} />
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          keyboardType="visible-password"
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        <TouchableOpacity disabled = {!(password && email)} activeOpacity={0.7} style={(password && email) ? styles.button : styles.inactive}>
          <Text
            style={{
              fontSize: s(15),
              color: "black",
              fontFamily: "Montserrat",
              textShadowColor:'black',
              textShadowRadius:3,
              
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              textShadowColor: "black",
              color: "white",
              fontWeight: "semibold",
              fontSize: 15,
              textShadowRadius: 12,
              marginRight: 10,
            }}
          >
            Haven't Signed Up Yet?
          </Text>

          <Pressable
            onPress={() => {
              navigation.navigate("customerReg");
            }}
          >
            <Text style={styles.underline}>Sign Up</Text>
          </Pressable>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={styles.line} />
          <Text style={{color:'white', marginHorizontal:10, textShadowColor:'black',textShadowRadius:10}}>OR</Text>
          <View style={styles.line} />
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate("barberReg");
          }}
        >
          <Text style={styles.underline}>Register as a Barber</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  underline:{
              textShadowColor: "black",
              color: "white",
              fontWeight: "semibold",
              textDecorationLine: "underline",
              textShadowRadius:12,
              textShadowOffset:{height: 1,width: 2},
              
          },
  backgroundImage: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    maxHeight: 170,
    maxWidth: 170,
    backgroundColor:'white',
    borderRadius:200,
    elevation:10,
    margin: 20,
    padding:10
  },
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
    paddingLeft:10
  },
  button: {
    width: "50%",
    height: s(40),
    elevation:10,
    marginTop:s(20),
    marginBottom:s(50),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    
  },
  line: {
    flex: 0,
    width:'30%',
    height: StyleSheet.hairlineWidth, // very thin line
    backgroundColor: "#fff",
  },
  inactive:{
    width: "50%",
    height: s(40),
    elevation:10,
    marginTop:s(20),
    marginBottom:s(50),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    opacity: 0.7
  }
});