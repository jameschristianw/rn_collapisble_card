import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import AppBar from "./components/AppBar";

export default function App() {
  const [isCollapsed, setCollapsed] = useState(true);
  const [loaded] = useFonts({
    SFProText: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    SFProTextSemibold: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  });

  if (!loaded) {
    return null;
  }

  const changeCollapse = () => {
    // isCollapsed = !isCollapsed;
    setCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Card style={styles.card}>
        <TouchableOpacity onPress={changeCollapse}>
          <View style={styles.cardTitleSection}>
            <Text style={styles.cardTitleText} numberOfLines={1}>
              Pre Site Aquisition (SITAC)
            </Text>
            <FontAwesome
              name="angle-down"
              size={24}
              color="black"
              onPress={changeCollapse}
            />
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed}>
          <View style={styles.collapsedContent}>
            <Text>Collapsed items</Text>
          </View>
        </Collapsible>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // padding: 15,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 8,
  },
  cardTitleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitleText: {
    fontSize: 18,
    flex: 1,
    paddingRight: 15,
    overflow: "hidden",
    fontFamily: "SFProTextSemibold",
  },
  collapsedContent: {
    borderTopColor: "black",
    borderTopWidth: 1,
  },
});
