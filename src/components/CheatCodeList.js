import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CheatCodeList = ({ cheatCodes }) => {
  return (
    <View style={styles.container}>
      {cheatCodes.map((code, index) => (
        <Text key={index} style={styles.cheatCode}>
          {code}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  cheatCode: {
    color: "#FFFFFF",
    fontSize: 16,
    marginVertical: 5,
  },
});

export default CheatCodeList;
