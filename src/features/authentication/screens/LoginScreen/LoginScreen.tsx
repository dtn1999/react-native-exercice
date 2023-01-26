import React from "react";
import { Button, ScrollView, Text } from "react-native";

const LoginScreen = (props: any) => (
  <ScrollView>
    <Text>Welcome to Login Screen</Text>
    <Button
      onPress={() => props.navigation.navigate("RegisterScreen")}
      title="Register"
      color="#841584"
    />
  </ScrollView>
);
export default LoginScreen;
