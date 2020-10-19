import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import defaultStyles from "../config/styles";

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.white,
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    fontSize: 15,
    color: defaultStyles.colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
