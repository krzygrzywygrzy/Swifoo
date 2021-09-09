import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Login } from "./Routes/Login";
import { Register } from "./Routes/Register";
import { Tabs } from "./Routes/Tab";

export type RootParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator();

export const Routes: React.FC = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
