import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { RootParamList } from "../Routes";
import tw from "tailwind-react-native-classnames";

type RegisterScreenNavProps = NativeStackNavigationProp<RootParamList, "Register">;

interface RegisterProps {
  navigation: RegisterScreenNavProps;
}

export const Register: React.FC<RegisterProps> = ({ navigation }) => {
  return (
    <View style={tw.style("flex", "items-center", "justify-center", "h-full")}>
      <Text>I am register screen</Text>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
