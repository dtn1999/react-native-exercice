import {
  createStackNavigator,
  StackHeaderProps,
} from "@react-navigation/stack";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import CommunityScreen from "./CommunityScreen";
import ProfileScreen from "./ProfileScreen";
import PersonNearByScreen from "./UserProfileScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StackScreenHeader } from "../components/StackHeaderScreen";

const Stack = createStackNavigator();

export default function SearchNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ header: StackScreenHeader }}
        initialRouteName="ProfileScreen"
      >
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
        <Stack.Screen name="UserProfileScreen" component={PersonNearByScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </>
  );
}
