import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  Linking,
} from "react-native";
import * as Sharing from "expo-sharing";
import * as WebBrowser from "expo-web-browser";

import Button from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { profileInfo } from "../data/dummyProfile";
import { peopleNearBy } from "../data/dummyUserNearBy";
import UserInfoComponent from "../components/UserInfo";

interface Props {}

const UserProfileScreen: React.FC<Props> = React.memo(({}) => {
  const route = useRoute<any>();
  const { person } = route.params;
  const handleShareOnInstagram = React.useCallback(async () => {
    console.log(person.profilePicture);
    // open instagram app at the user's profile
    Linking.openURL(person.instagramLink);
  }, [person.instagramLink]);
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
        <UserInfoComponent profileInfo={person} />
        <View style={{ marginVertical: 20 }}>
          <Button
            onPress={handleShareOnInstagram}
            label={`${person.name} Auf Instagram folgen`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default UserProfileScreen;

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
