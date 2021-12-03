import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "ravi", age: "1" },
    { name: "rahul", age: "2" },
    { name: "mayur", age: "3" },
    { name: "sweta", age: "4" },
    { name: "archita", age: "5" },
    { name: "yo", age: "6" },
    { name: "ho", age: "7" },
    { name: "f", age: "8" },
    { name: "ft", age: "9" },
    { name: "s", age: "10" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {" "}
            {item.name}- Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
