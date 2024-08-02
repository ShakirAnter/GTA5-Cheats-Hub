// components/CustomHeader.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.headerTitle}>GTA 5 Cheats Hub</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Icon
            name="notifications-outline"
            size={25}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="search-outline"
            size={25}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingTop: 50,
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    fontSize: 20,
    color: Colors.text,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
});

export default CustomHeader;
