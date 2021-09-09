import { StatusBar, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

export const defStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: StatusBar.currentHeight,
  },
});

export const inputStyle = tw.style("border-b", "p-2", "w-4/5", "mb-2");
