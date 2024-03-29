import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

const UploadScreen = ({ onAnimationFinish, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onAnimationFinish}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadScreen;
