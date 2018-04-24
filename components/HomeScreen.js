import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="ios-person" size={70} color="#841584" />
        <Text>HOME SCREEN</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Add')}
          title="Enter Unwanted Ingredient"
          color="#841584"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Scan')}
          title="Scan Ingredient List"
          color="#841584"
        />
      </View>
    );
  }
}
