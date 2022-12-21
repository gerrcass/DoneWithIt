import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.innerContainer, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight + 3, // if not +3 then ListingEditScreen's animation modal doesn't cover the entire screen (?)
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
