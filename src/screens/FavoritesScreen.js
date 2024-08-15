import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlatformSelector from "../components/PlatformSelector";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

const FavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.platformSelectorContainer}>
        <Text style={styles.title}>Platform Selector</Text>

        <View style={styles.platformsSelectors}>
          <PlatformSelector
            img="ps"
            platformName="Playstation"
            onPress={() =>
              navigation.navigate("Cheats", {
                platform: "Playstation",
                game: "GTA5",
              })
            }
          />
          <PlatformSelector
            img="xbox"
            platformName="Xbox"
            onPress={() =>
              navigation.navigate("Cheats", { platform: "Xbox", game: "GTA5" })
            }
          />
          <PlatformSelector
            img="pc"
            platformName="PC"
            onPress={() =>
              navigation.navigate("Cheats", { platform: "PC", game: "GTA5" })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 15,
  },
  title: {
    fontSize: 24,
    color: Colors.text,
    marginBottom: 20,
  },
  platformSelectorContainer: {},
});

export default FavoritesScreen;
