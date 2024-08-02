// navigation/PlatformCheatsStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CheatsScreen from "../screens/CheatsScreen";
import CustomHeader from "../components/CustomHeader";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const PlatformCheatsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlatformHome"
        component={HomeScreen}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="Cheats"
        component={CheatsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.text,
        }}
      />
    </Stack.Navigator>
  );
};

export default PlatformCheatsStack;
