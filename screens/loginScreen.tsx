import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable} from "react-native";
import { useState } from "react";
import LogoPic from '../src/assets/logoPic';

export default function LoginScreen() {


const [password,setPassword] = useState("");
const [email,setEmail]  = useState("");

console.log(email +'   '+ password)

  return (
    <View style={styles.container}>
      <LogoPic style={styles.logo}/>
      <TextInput
        style={styles.textInput}
        keyboardType="email-address"
        placeholder="Enter Email"
        value = {email}
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
        <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.84,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo:{
    maxHeight: 250,
    maxWidth: 250,
    

  },
  textInput:{
    height: 40,
    width: "80%",
    borderColor:'grey',
    color: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 10
  },
  button:{
    width:"50%",
    height: 40,
    elevation: 20,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#4a90e2',
    borderRadius: 10
  }
});