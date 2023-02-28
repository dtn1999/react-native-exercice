import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../features/authentication/screens/LoginScreen/LoginScreen';
import RegisterScreen from '../features/authentication/screens/RegisterScreen/RegisterScreen';
import SearchNavigator from '../features/search/screens/SearchNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Search">
      {/* Auth Stack */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      {/* Search Stack */}
      <Stack.Screen name="Search" component={SearchNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
