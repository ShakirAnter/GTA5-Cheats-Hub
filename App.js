// App.js
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./src/navigation/MainNavigator";
import WelcomeScreen from "./src/screens/WelcomeScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";
import Colors from "./src/constants/Colors";

export default function App() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const checkFirstVisit = async () => {
      try {
        const value = await AsyncStorage.getItem("hasVisited");
        if (value !== null) {
          setIsFirstVisit(false);
          setIsLoading(false);
        } else {
          await AsyncStorage.setItem("hasVisited", "true");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error checking first visit", error);
      }
    };

    checkFirstVisit();
  }, []);

  return (
    <NavigationContainer>
      {isLoading && (
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.primary,
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      {isFirstVisit ? (
        <WelcomeScreen
          onNavigateToCheats={() => {
            setIsFirstVisit(false);
            NavigationContainer.navigate("Cheats");
          }}
        />
      ) : (
        <MainNavigator />
      )}
    </NavigationContainer>
  );
}
