import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

interface Props {
  label: string;
  onPress: () => void;
  icon?: any;
}
const Button: React.FC<Props> = ({label, onPress, icon}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
        {icon ?? null}
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#25292e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  buttonLabel: {
    color: 'white',
    textTransform: 'uppercase',
  },
});
