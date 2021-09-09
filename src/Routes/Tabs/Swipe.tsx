import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

interface SwipeProps {}

export const Swipe: React.FC<SwipeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>swipe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: StatusBar.currentHeight,
  },
});
