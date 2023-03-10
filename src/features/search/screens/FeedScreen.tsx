import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {}

const FeedScreen: React.FC<Props> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <Text>Feed Screen</Text>
    </View>
  );
});

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
