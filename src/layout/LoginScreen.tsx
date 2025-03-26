import { View, Text,TextInput } from "react-native";

export default function LoginScreen(){
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Login</Text>
          <Text>Email</Text>
          <TextInput placeholder="Usuario@gmail.com"></TextInput>
          <Text>Password</Text>
          <TextInput placeholder="***************" secureTextEntry></TextInput>
        </View>
      );
}