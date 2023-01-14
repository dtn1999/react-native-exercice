import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

interface Props {
  label: string;
  onPress: () => void;
}
const Button: React.FC<Props> = ({ label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#25292e",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    color: "white",
  },
  buttonLabel: {
    color: "white",
    textTransform: "uppercase",
  },
});
