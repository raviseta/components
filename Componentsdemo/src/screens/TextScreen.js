import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      ></TextInput>
      <Text> my name is {name} </Text>
      {name.length < 4 ? <Text>length is less</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
