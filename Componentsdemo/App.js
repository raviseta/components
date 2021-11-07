import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ComponentsScreen from './src/screens/ComponentsScreen';

const navigator =  createStackNavigator(
  {
    Components : ComponentsScreen
  },
  {
    initialRouteName : 'Components',
    defaultNavigationOptions : {
      title : 'App'
    }
  }
);


export default createAppContainer(navigator)