import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../constants/Colors";

import { images } from "../constants/images";

const PlatformSelector = ({ img, platformName }) => {
  return (
    <>
      <TouchableNativeFeedback onPress={() => console.log("Hello World")}>
        <View style={styles.platform}>
          <Image style={styles.img} source={images[img]} />
          <Text style={styles.platformName}>{platformName}</Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  platform: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.text,
    borderRadius: 100,
    padding: 20,
    marginVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 50,
    height: 50,
  },
  platformName: {
    color: Colors.text,
    fontSize: 20,
  },
});

export default PlatformSelector;
