// navigation/MainNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CheatsScreen from "../screens/CheatsScreen";
import AboutScreen from "../screens/AboutScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SettingsScreen from "../screens/SettingsScreen";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";
import CustomHeader from "../components/CustomHeader";
import PlatformCheatsStack from "./PlatformCheatsStack";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Favorites") {
            iconName = "heart";
          } else if (route.name === "About") {
            iconName = "information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = "settings";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: Colors.primary,
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.text,
        tabBarInactiveTintColor: "black",
        headerShown: false,
        // tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={PlatformCheatsStack}
        // options={{ header: () => <CustomHeader /> }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
