import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { s, vs } from 'react-native-size-matters';
import PhotoPicker from '../src/components/imagePicker';


let customerInfo: { [key: string]: any } = {};
export default function CustomerRegistrationScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const register= () => {
  customerInfo['name'] = name
  customerInfo['email'] = email
  customerInfo['password'] = password
  
  console.log(customerInfo)
} 

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../src/assets/background-img.png")}
      >
        <View style={{elevation:10}}>
          <PhotoPicker
            onPick={function (image: { uri: string; base64?: string }): void {
               customerInfo["ImageBase64"] = image.base64
               customerInfo['imageURI'] = image.uri
               
            }}
          />
        </View>

        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPass}
          onChangeText={setConfirmPass}
        ></TextInput>

        <TouchableOpacity
          style={
            !(name  && email && password && confirmPass)
              ? styles.inactive
              : styles.register
          }
          onPress={() =>register()}
          disabled={!(name && email && password && confirmPass)}
        >
          <Text
            style={{ fontFamily: "Montserrat", fontSize: 20, color: "white" }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  register: {
      width: "70%",
      height: vs(40),
      backgroundColor: "#f2533b",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      elevation: 10,
    },
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
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
  backgroundImage: {
    
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },inactive: {
    width: "70%",
    height: vs(40),
    backgroundColor: "#f2533b",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    elevation: 10,
    opacity:0.7
  },
});