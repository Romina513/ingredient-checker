import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import AddIngredientsScreen from './components/AddIngredientsScreen';
import ScanIngredientListScreen from './components/ScanIngredientListScreen';


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Add: {
      screen: AddIngredientsScreen,
    },
    Scan: {
      screen: ScanIngredientListScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
