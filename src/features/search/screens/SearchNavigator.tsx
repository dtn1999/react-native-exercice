import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import React from 'react';
import CommunityScreen from './CommunityScreen';
import ProfileScreen from './ProfileScreen';
import PersonNearByScreen from './UserProfileScreen';
import {StackScreenHeader} from '../components/StackHeaderScreen';

const Stack = createStackNavigator();

export default function SearchNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{header: StackScreenHeader}}
        initialRouteName="ProfileScreen">
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
        <Stack.Screen name="UserProfileScreen" component={PersonNearByScreen} />
      </Stack.Navigator>
      <StatusBar barStyle="default" />
    </>
  );
}
