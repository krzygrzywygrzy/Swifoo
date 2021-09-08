import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { RootParamList } from "../Routes";
import tw from "tailwind-react-native-classnames";

type LoginScreenNavProps = NativeStackNavigationProp<RootParamList, "Login">;

interface LoginProps {
  navigation: LoginScreenNavProps;
}

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <View style={tw.style("flex", "items-center", "justify-center", "h-full")}>
      <Text>I am login screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      ></Button>
    </View>
  );
};
