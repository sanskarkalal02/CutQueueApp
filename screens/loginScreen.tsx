import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground} from "react-native";
import { useState } from "react";
import LogoPic from '../src/assets/logoPic';
import BackgroundImage from "../src/assets/background-img";
import { s } from "react-native-size-matters";
import React from "react";

export default function LoginScreen() {


const [password,setPassword] = useState("");
const [email,setEmail]  = useState("");

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
          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={{ fontSize: 15, color: "black", fontWeight: '800' }}>
              Sign In
            </Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
    maxHeight: 150,
    maxWidth: 150,
    backgroundColor:'white',
    borderRadius:200,
    elevation:10,
    margin: 10
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
    padding:10
  },
  button: {
    width: "50%",
    height: s(40),
    elevation:10,
    marginTop:s(20),
    marginBottom:s(160),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
});