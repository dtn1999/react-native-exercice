import React from "react";
import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";

import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import profileInfo from "../data/user-profile.json";
import peopleNearBy from "../data/users.json";
import UserInfoComponent from "../components/UserInfo";

interface Props {}

const ProfileScreen: React.FC<Props> = React.memo(({}) => {
  const navigation = useNavigation<any>();
  // This function will help to navigate to the community screen. It passes
  // the user's profile info to the community screen. So that it can be used to search
  const handleNavigation = () => {
    navigation.navigate("CommunityScreen" as never, {
      user: profileInfo,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.containerWrapper}>
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
              style={styles.icon}
              color="#25292e"
            />
            <FontAwesome name="star" size={24} color="#25292e" />
          </View>
        </View>
        <UserInfoComponent profileInfo={profileInfo} />
        <View style={styles.buttonWrapper}>
          <Button onPress={handleNavigation} label="Meine Position Freigeben" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const Stack = createStackNavigator();

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  containerWrapper: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 20,
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
  icon: { marginBottom: 8 },
  buttonWrapper: { marginVertical: 20 },
});
