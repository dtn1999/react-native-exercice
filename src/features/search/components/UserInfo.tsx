import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {View, Text, StyleSheet} from 'react-native';
import {ProfileCircle} from './ProfileCircle';
import {RowInfo} from './RowInfo';

interface Props {
  profileInfo: any;
}

const UserInfoComponent: React.FC<Props> = React.memo(({profileInfo}) => {
  return (
    <View>
      <ProfileCircle
        profilePicture={profileInfo.profilePicture}
        name={profileInfo.name}
      />
      <View>
        <Text style={styles.title}>Interests</Text>
        {profileInfo.interests.map((interest: any, index: number) => (
          <Text key={index} style={styles.item}>
            {interest}
          </Text>
        ))}
      </View>
      <View>
        <Text style={styles.title}>Personal Data</Text>
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

const styles = StyleSheet.create({
  title: {fontSize: 18, fontWeight: '700', marginVertical: 4},
  item: {marginHorizontal: 10, paddingVertical: 4},
});
