import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import CheatCodeList from "../components/CheatCodeList";
import PlatformSelector from "../components/PlatformSelector";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const CheatsScreen = ({ navigation }) => {
  const [selectedPlatform, setSelectedPlatform] = useState("PS3");
  const cheatCodes = {
    PS3: ["Cheat 1", "Cheat 2", "Cheat 3"],
    PS4: ["Cheat 4", "Cheat 5", "Cheat 6"],
    PS5: ["Cheat 7", "Cheat 8", "Cheat 9"],
    Xbox: ["Cheat 10", "Cheat 11", "Cheat 12"],
    PC: ["Cheat 13", "Cheat 14", "Cheat 15"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlatformSelector onSelectPlatform={setSelectedPlatform} />
      <CheatCodeList cheatCodes={cheatCodes[selectedPlatform]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default CheatsScreen;
