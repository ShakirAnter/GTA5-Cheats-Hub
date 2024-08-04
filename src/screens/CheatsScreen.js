// screens/CheatsScreen.js
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import cheatsData from "../constants/cheats.json";
import Icon from "react-native-vector-icons/Ionicons";

import { playstationImages, xboxImages } from "../constants/buttonImages";

const CheatsScreen = ({ route }) => {
  const { platform, game } = route.params;
  const [cheats, setCheats] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (
      cheatsData.platforms[platform] &&
      cheatsData.platforms[platform][game]
    ) {
      setCheats(cheatsData.platforms[platform][game]);
    }
  }, [platform, game]);

  // Group cheats by category
  const groupedCheats = cheats.reduce((acc, cheat) => {
    if (!acc[cheat.category]) {
      acc[cheat.category] = [];
    }
    acc[cheat.category].push(cheat);
    return acc;
  }, {});

  // Filtered cheats based on search query
  const filteredGroupedCheats = Object.entries(groupedCheats).reduce(
    (acc, [category, cheats]) => {
      const filteredCheats = cheats.filter(
        (cheat) =>
          cheat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredCheats.length > 0) {
        acc.push([category, filteredCheats]);
      }

      return acc;
    },
    []
  );

  const renderCheatCode = (code) => {
    if (platform === "PC") {
      return <Text style={styles.cheatCode}>{code}</Text>;
    } else {
      const images = platform === "Xbox" ? xboxImages : playstationImages;

      const buttons = code
        .split(", ")
        .map((buttonText, index) => (
          <Image
            key={index}
            source={images[buttonText]}
            style={styles.buttonImage}
          />
        ));
      return <View style={styles.buttonContainer}>{buttons}</View>;
    }
  };

  const clearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Icon name="search" size={25} color="black" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search cheats or categories"
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="never"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={clearSearch}>
            <Icon name="close-circle" size={25} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={filteredGroupedCheats}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{item[0]}</Text>
            {item[1].map((cheat) => (
              <View key={cheat.name} style={styles.cheatContainer}>
                <Text style={styles.cheatName}>{cheat.name}</Text>
                <TouchableOpacity style={styles.wishListWrapper}>
                  <Icon name="heart-outline" size={25} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.cheatDescription}>{cheat.description}</Text>
                {renderCheatCode(cheat.code)}
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.primary,
  },
  cheatContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  wishListWrapper: {
    position: "absolute",
    top: 15,
    right: 15,
    flexDirection: "row",
  },
  cheatName: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
  cheatDescription: {
    fontSize: 14,
    marginVertical: 5,
    color: "#d8ebde",
  },
  cheatCode: {
    fontSize: 16,
    color: Colors.text,
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  buttonImage: {
    width: 30,
    height: 30,
    margin: 2,
  },
});

export default CheatsScreen;
