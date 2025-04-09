import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { supabase } from "../supabaseClient"

export default function RegisterScreeen({ onClose }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [mobilephone, setMobilephone] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrormessage] = useState("");

    const handleRegister = async () => {
        setLoading(true);
        setErrormessage("");
         
        const{data, error}= await supabase.auth.signUp({
            email,password
        });
        if(error){
            setErrormessage(error.message);
            setLoading(false);
            return;
        }
    //Insert data into SUPABASE 
    const { error: InsertError } = await supabase.from("users").insert([
        {
            email: email,
            password: password,
            fullname: fullname,
            mobile_phone: mobilephone
        }
    ])
    if (InsertError){
        setErrormessage(InsertError.message);
        setLoading(false);
        
    }else{
        alert("User has been created")
        onClose();
    }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Sing up</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuario@gmail.com"></TextInput>

            <TextInput style={styles.input}
                placeholder="***************" secureTextEntry></TextInput>


            <TextInput style={styles.input}
                placeholder="Your fullname" secureTextEntry></TextInput>


            <TextInput style={styles.input}
                placeholder="(+57) 000000" secureTextEntry></TextInput>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose}>
                <Text style={styles.link}>Login</Text>
            </TouchableOpacity>


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        width: "65%",
        padding: 10,
        marginVertical: 10,
        backgroundColor: "while",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc"
    },
    button: {
        marginTop: 20,
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        width: "65%",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,

    },
    link: {
        marginTop: 10,
        color: "blue",
        textDecorationLine: "underline"
    }

})