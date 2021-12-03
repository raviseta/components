import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "./Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score="1"
      ></ImageDetail>
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score="2"
      ></ImageDetail>
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score="3"
      ></ImageDetail>
    </View>
  );
};

export default ImageScreen;
