import React from "react";
import { View, Text } from "react-native";

interface RowInfoProps {
  icon: any;
  text: string;
}

export const RowInfo: React.FC<RowInfoProps> = React.memo(({ icon, text }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Text>{icon}</Text>
    <Text style={{ marginHorizontal: 10, paddingVertical: 4 }}>{text}</Text>
  </View>
));
