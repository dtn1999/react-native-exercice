import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {}

const AnalyticsScreen: React.FC<Props> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <Text>Analytics Screen</Text>
    </View>
  );
});

export default AnalyticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
