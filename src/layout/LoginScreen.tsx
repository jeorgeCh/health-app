import { useState } from "react";
import { View, Text,TextInput,StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "expo-router";
import RegisterScreen from "./RegisterScreeen";

export default function LoginScreen(){
  //const [email, setEmail]= useState(); 
  const [showRegister, setShowRegister] = useState(false);
  const navigation = useNavigation();
  
  useEffect(()=>{
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  if(showRegister){
    return<RegisterScreen onClose={()=>setShowRegister(false)}/>
  }
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

          <TouchableOpacity onPress={()=> setShowRegister(true)}>
           <Text style= {styles.link}>Sign up</Text>
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
    width: "65%",
    alignItems:"center"
  },
  buttonText:{
    color: "white",
    fontSize: 18,
    
  },
  link:{
    marginTop:10,
    color: "blue",
    textDecorationLine:"underline"
  }

})