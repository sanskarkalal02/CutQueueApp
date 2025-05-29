import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require ("./assets/logo.png")}/>
      <TextInput style={styles.textInput} keyboardType="numeric" placeholder="Enter Email"></TextInput>
      <TextInput style={styles.textInput} keyboardType="numeric" placeholder="Enter Password"></TextInput>
      <TouchableOpacity style={styles.button}  >
        
        <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>LOGIN</Text>
         
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