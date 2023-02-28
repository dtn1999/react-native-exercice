import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  Linking,
} from 'react-native';

import Button from '../components/Button';
import {useRoute} from '@react-navigation/native';
import UserInfoComponent from '../components/UserInfo';

interface Props {}

const UserProfileScreen: React.FC<Props> = React.memo(({}) => {
  const route = useRoute<any>();
  const {person} = route.params;
  const handleShareOnInstagram = React.useCallback(async () => {
    // open instagram app at the user's profile
    const response = await Linking.openURL(person.instagramLink);
    console.log(response);
  }, [person.instagramLink]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <UserInfoComponent profileInfo={person} />
        <View style={{marginVertical: 20}}>
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
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
