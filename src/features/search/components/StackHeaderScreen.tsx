import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackHeaderProps} from '@react-navigation/stack';
import {View, Pressable, StyleSheet} from 'react-native';

export const StackScreenHeader = (props: StackHeaderProps) => {
  return (
    <View style={styles.container}>
      {props.back && (
        <Pressable
          style={styles.pressable}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#25292e" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  pressable: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});
