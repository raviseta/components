import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="go to Component screen"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="go to Image screen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="go to Counter screen"
      />
      <Button
        onPress={() => navigation.navigate("colorScreen")}
        title="go to Color screen"
      />
      <Button
        onPress={() => navigation.navigate("squareScreen")}
        title="go to Square screen"
      />

      <Button
        onPress={() => navigation.navigate("textScreen")}
        title="go to text screen"
      />

      <Button
        onPress={() => navigation.navigate("boxScreen")}
        title="go to box screen"
      />

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
