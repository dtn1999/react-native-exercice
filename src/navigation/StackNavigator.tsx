import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../features/authentication/screens/LoginScreen/LoginScreen";
import RegisterScreen from "../features/authentication/screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "../features/search/screens/ProfileScreen";
import CommunityScreen from "../features/search/screens/CommunityScreen";
import BottomTabNavigator from "./BottomTabNavigator";

// Auth

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="MainApp"
    >
      {/* Auth Stack */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      {/* Search Stack */}
      <Stack.Screen name="MainApp" component={BottomTabNavigator} />
      <Stack.Screen name="MapScreen" component={CommunityScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
