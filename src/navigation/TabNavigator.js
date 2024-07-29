// navigation/TabNavigator.js
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import CheatsScreen from "../screens/CheatsScreen";

import Colors from "../constants/Colors";

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Welcome") {
            iconName = "book";
          } else if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Cheats") {
            iconName = "book";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Cheats" component={CheatsScreen} />
    </Tab.Navigator>
  );
}
