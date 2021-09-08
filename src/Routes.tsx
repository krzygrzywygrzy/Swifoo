import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Login } from "./Routes/Login";
import { Register } from "./Routes/Register";

export type RootParamList = {
  Login: undefined;
  Register: undefined;
};

interface RoutesProps {}
const Stack = createNativeStackNavigator();

export const Routes: React.FC<RoutesProps> = ({}) => {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
