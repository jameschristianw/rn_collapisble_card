import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Constants } from "../helper/constants";

const AppBar = (props) => {
  return (
    <View style={styles.appBar}>
      <StatusBar />
      <Text>This is AppBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    marginTop: 40,
    width: "100%",
    height: Constants.appBarHeight,
    backgroundColor: "red",
    // flex: 1,
    flexDirection: "column",
  },
});

export default AppBar;
