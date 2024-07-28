import React from "react";
import { View, Button, StyleSheet } from "react-native";

const PlatformSelector = ({ onSelectPlatform }) => {
  return (
    <View style={styles.container}>
      <Button title="PS3" onPress={() => onSelectPlatform("PS3")} />
      <Button title="PS4" onPress={() => onSelectPlatform("PS4")} />
      <Button title="PS5" onPress={() => onSelectPlatform("PS5")} />
      <Button title="Xbox" onPress={() => onSelectPlatform("Xbox")} />
      <Button title="PC" onPress={() => onSelectPlatform("PC")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default PlatformSelector;
