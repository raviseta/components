import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Button, state } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>

      <Text>Count : {counter}</Text>
    </View>
  );
};

export default CounterScreen;
