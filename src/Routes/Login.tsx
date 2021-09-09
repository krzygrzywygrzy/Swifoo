import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { RootParamList } from "../Routes";
import tw from "tailwind-react-native-classnames";
import { inputStyle } from "../styles";

type LoginScreenNavProps = NativeStackNavigationProp<RootParamList, "Login">;

interface LoginProps {
  navigation: LoginScreenNavProps;
}

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  const handleSubmit = (): void => {
    navigation.navigate("Home");
  };

  return (
    <View style={tw.style("flex", "items-center", "justify-center", "h-full")}>
      <Text style={tw.style("m-8", "text-4xl")}>Swifoo</Text>
      <TextInput style={inputStyle} placeholder="email..." />
      <TextInput style={inputStyle} placeholder="password..." />
      <View style={tw.style("flex", "flex-row", "justify-end", "w-4/5", "items-center")}>
        <Pressable style={tw.style("mr-4")} onPress={() => navigation.push("Register")}>
          <Text>sign up</Text>
        </Pressable>
        <Pressable
          style={tw.style("bg-black", "px-4", "py-2", "rounded")}
          onPress={handleSubmit}
          android_disableSound={false}
        >
          <Text style={tw.style("text-white")}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};
