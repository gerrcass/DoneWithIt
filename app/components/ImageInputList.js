import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollView = useRef();
  return (
    <View style={styles.scrollviewFix}>
      <ScrollView //by default ScrollView grow to fill all the available space, by wrapping it inside a View this problem get solved (because by default the size of the View is determined by the size of its content).
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
  scrollviewFix: { alignItems: "flex-start" }, //fix an issue when adding several imagesUris to the list and removing manually one by one (elements 'lose' its alignment and behave like if it was an 'center' value)
});
