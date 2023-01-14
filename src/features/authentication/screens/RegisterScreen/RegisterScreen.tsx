import React from 'react';
import {Button, ScrollView, Text} from 'react-native';

const RegisterScreen = (props: any) => (
  <ScrollView>
    <Text>Welcome to Register Screen</Text>
    <Button
      onPress={() => props.navigation.navigate('LoginScreen')}
      title="Login"
      color="#841584"
    />
  </ScrollView>
);
export default RegisterScreen;
