import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

interface Props {}

const profileInfo = {
  name: "John Doe",
  age: 25,
  city: "New York",
  language: "English",
  instagramLink: "https://www.instagram.com/johndoe/",
  profilePicture: require("../../../../assets/images/profile.jpg"),
  interests: [
    "Rock Climbing",
    "Swimming",
    "Running & Jogging",
    "Mountain Biking",
    "Yoga",
    "Hiking",
  ],
};

interface RowInfoProps {
  icon: any;
  text: string;
}
const RowInfo: React.FC<RowInfoProps> = React.memo(({ icon, text }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Text>{icon}</Text>
    <Text style={{ marginHorizontal: 10, paddingVertical: 4 }}>{text}</Text>
  </View>
));

const ProfileScreen: React.FC<Props> = React.memo(({}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("MapScreen", {});
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileImageContainer}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            overflow: "hidden",
          }}
        >
          <Image style={styles.image} source={profileInfo.profilePicture} />
        </View>
        <Text style={{ marginVertical: 5 }}>{profileInfo.name}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "700", marginVertical: 4 }}>
          Interests
        </Text>
        {profileInfo.interests.map((interest, index) => (
          <Text
            key={index}
            style={{ marginHorizontal: 10, paddingVertical: 4 }}
          >
            {interest}
          </Text>
        ))}
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "700", marginVertical: 4 }}>
          Personal Data
        </Text>
        <RowInfo
          icon={<FontAwesome name="user-o" size={18} color="#25292e" />}
          text={profileInfo.name}
        />
        <RowInfo
          icon={<Octicons name="number" size={18} color="#25292e" />}
          text={`${profileInfo.age} years old`}
        />
        <RowInfo
          icon={
            <MaterialIcons name="location-city" size={18} color="#25292e" />
          }
          text={profileInfo.city}
        />
        <RowInfo
          icon={<MaterialIcons name="language" size={18} color="#25292e" />}
          text={profileInfo.language}
        />
        <RowInfo
          icon={<FontAwesome name="instagram" size={18} color="#25292e" />}
          text={profileInfo.instagramLink}
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button onPress={handleNavigation} label="Publish my Position" />
      </View>
    </ScrollView>
  );
});

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
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
