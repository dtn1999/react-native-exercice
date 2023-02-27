import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
interface ProfileCircleProps {
  profilePicture: any;
  name: string;
}

export const ProfileCircle: React.FC<ProfileCircleProps> = React.memo(
  ({ profilePicture, name }) => (
    <View style={styles.profileImageContainer}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          overflow: "hidden",
        }}
      >
        <Image style={styles.image} source={{ uri: profilePicture }} />
      </View>
      <Text style={{ marginVertical: 5 }}>{name}</Text>
    </View>
  )
);

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
