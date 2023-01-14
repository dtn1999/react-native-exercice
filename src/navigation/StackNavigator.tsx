import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../features/authentication/screens/LoginScreen/LoginScreen";
import RegisterScreen from "../features/authentication/screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "../features/search/screens/ProfileScreen";
import MapScreen from "../features/search/screens/MapScreen";

// Auth

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="ProfileScreen"
    >
      {/* Auth Stack */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      {/* Search Stack */}
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
