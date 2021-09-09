import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Swipe } from "./Tabs/Swipe";
const Tab = createBottomTabNavigator();

export const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Tab.Screen name="Swipe" component={Swipe} />
    </Tab.Navigator>
  );
};
