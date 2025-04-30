import {useEffect,useState} from "react"
import { View, Image, StyleSheet } from "react-native"
import LoginScreen from "./LoginScreen"
import { useNavigation } from "expo-router";

export default function SplashScreen(){
const navigation = useNavigation();
  
  useEffect(()=>{
    navigation.setOptions({headerShown: false});
  }, [navigation]);
    const [showLogin, setShowLogin ] = useState(false)
    useEffect(()=>{
        const timer= setTimeout(()=>{
            setShowLogin(true);
        },3000);
        return ()=> clearTimeout(timer);
    }, []);
    if(showLogin){
        return<LoginScreen/>;
    }
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source ={
               require("../assets/splash.png")
            }></Image>
        </View>
    )
}
const styles =StyleSheet.create({

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
      image:{
        height:250,
        width: 250
      }
})