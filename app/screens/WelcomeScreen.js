import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

//import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppText style={styles.tagline}>Sell What You Don't Need</AppText>
        {/* <MaterialCommunityIcons
          name="arrow-right-circle-outline"
          size={20}
          color={colors.primary}
        /> */}
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton text="Login" onPress={() => console.log("Login Tapped")} />
        <AppButton
          text="Register"
          color="secondary"
          onPress={() => console.log("Register Tapped")}
        />
      </View>

      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logoBox: { position: "absolute", top: 70, alignItems: "center" },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
    color: colors.black,
  },
});
