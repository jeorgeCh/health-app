import { useState } from "react";
import { View, Text,TextInput,StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "expo-router";

export default function LoginScreen(){
  //const [email, setEmail]= useState(); 
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({headersShown: false});
  }, [navigation]);
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Sing in</Text>
          <Text>Email</Text>
          <TextInput style= {styles.input}       
          placeholder="Usuario@gmail.com"></TextInput>
          <Text>Password</Text>
          <TextInput style= {styles.input}
          placeholder="***************" secureTextEntry></TextInput>
          <TouchableOpacity style ={styles.button}>
           <Text style= {styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#F0F0F0"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom: 20
  },
  input:{
    width: "65%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "while", 
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc"   
  },
  button:{
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    width: "20%"
  },
  buttonText:{
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
    
  }

})