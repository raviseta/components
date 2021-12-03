import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/imageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Components: ComponentsScreen,
    List: ListScreen,
    Home: HomeScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    colorScreen: ColorScreen,
    squareScreen: SquareScreen,
    textScreen: TextScreen,
    boxScreen: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
