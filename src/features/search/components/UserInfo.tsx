import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { ProfileCircle } from "./ProfileCircle";
import { RowInfo } from "./RowInfo";

interface Props {
  profileInfo: any;
}

const UserInfoComponent: React.FC<Props> = React.memo(({ profileInfo }) => {
  return (
    <View>
      <ProfileCircle
        profilePicture={profileInfo.profilePicture}
        name={profileInfo.name}
      />
      <View>
        <Text style={{ fontSize: 18, fontWeight: "700", marginVertical: 4 }}>
          Interests
        </Text>
        {profileInfo.interests.map((interest: any, index: number) => (
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
    </View>
  );
});
export default UserInfoComponent;
