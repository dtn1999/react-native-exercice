import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {}

const HomeScreen: React.FC<Props> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
