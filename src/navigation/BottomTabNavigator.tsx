import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ProfileScreen from "../features/search/screens/ProfileScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
import CommunityScreen from "../features/search/screens/CommunityScreen";
import CommunityScreenNavigator from "../features/search/screens/CommunityStackNagator";
import HomeScreen from "../features/search/screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home1"
          options={{
            title: "Analytics",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-timeline-variant"
                color={color}
                size={size}
              />
            ),
          }}
          component={ProfileScreen}
        />
        <Tab.Screen
          name="CommunityScreen"
          options={{
            title: "Community",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="people-outline" color={color} size={size} />
            ),
          }}
          component={CommunityScreenNavigator}
        />
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Home3"
          options={{
            title: "News",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="rss-feed" color={color} size={size} />
            ),
          }}
          component={ProfileScreen}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person-outline" color={color} size={size} />
            ),
          }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </>
  );
}
