import { MaterialIcons } from "@expo/vector-icons";
import { StackHeaderProps } from "@react-navigation/stack";
import { View, Pressable } from "react-native";

export const StackScreenHeader = (props: StackHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 80,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-end",
      }}
    >
      {props.back && (
        <Pressable
          style={{ paddingVertical: 5, paddingHorizontal: 20 }}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="#25292e" />
        </Pressable>
      )}
    </View>
  );
};
