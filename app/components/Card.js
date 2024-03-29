import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import Text from "./Text";
import defaultStyles from "../config/styles";
import { Image } from "react-native-expo-image-cache";

export default function Card({
  title,
  subtitle,
  imageUrl,
  onPress,
  thumbnailUrl,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/* <Image style={styles.image} source={{ uri: imageUrl }} /> */}
        <Image
          style={styles.image}
          tint="light"
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
