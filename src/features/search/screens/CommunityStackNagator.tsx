import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CommunityScreen from "./CommunityScreen";
import PersonNearByScreen from "./UserProfileScreen";

const Stack = createStackNavigator();

export default function CommunityScreenNavigator() {
  return (
    <Stack.Navigator initialRouteName="PeopleNearByListScreen">
      <Stack.Screen
        name="PeopleNearByListScreen"
        component={CommunityScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="UserProfileScreen"
        component={PersonNearByScreen}
        options={{
          title: ""
        }}
      />
    </Stack.Navigator>
  );
}
