import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { defStyles } from "../../styles";

interface SwipeProps {}

export const Swipe: React.FC<SwipeProps> = () => {
  return (
    <View style={defStyles.container}>
      <Text>swipe</Text>
    </View>
  );
};
