import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import Colors from "../constants/Colors";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  storeData,
  getData,
  removeData,
  clearAll,
} from "../constants/dataManipulation";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GTA5 Cheats</Text>
      <Button
        title="View Cheats"
        onPress={() => navigation.navigate("Cheats")}
        color={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    color: Colors.text,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
