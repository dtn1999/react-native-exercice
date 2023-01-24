import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { createStackNavigator } from "@react-navigation/stack";

import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { profileInfo } from "../data/dummyProfile";
import { peopleNearBy } from "../data/dummyUserNearBy";
import { ProfileCircle } from "../components/ProfileCircle";
import { RowInfo } from "../components/RowInfo";
import UserInfoComponent from "../components/UserInfo";

interface Props {}

const ProfileScreen: React.FC<Props> = React.memo(({}) => {
  const navigation = useNavigation<any>();
  const handleNavigation = () => {
    const people = findPeopleNearBy(profileInfo.interests);
    navigation.navigate("CommunityScreen" as never, {
      people,
    });
  };
  /**
   * This function will help to find people near by based on the
   * user's location and user's interests
   * @param data
   */
  const findPeopleNearBy = (data: any) => {
    // for now just return dummy data
    return peopleNearBy;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingVertical: 20,
          }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="#25292e"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View>
            <FontAwesome
              name="gear"
              size={24}
              style={{ marginBottom: 8 }}
              color="#25292e"
            />
            <FontAwesome name="star" size={24} color="#25292e" />
          </View>
        </View>
        <UserInfoComponent profileInfo={profileInfo} />
        <View style={{ marginVertical: 20 }}>
          <Button onPress={handleNavigation} label="Publish my Position" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const Stack = createStackNavigator();

export default function ProfileScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  profileImageContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
