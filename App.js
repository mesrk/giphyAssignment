
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Screen Imports
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Favourites from './src/Screens/Favourites';


const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export default function App() {
  return (
    <NavigationContainer>
     <Navigator
      headerMode="none"
      initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
        <Screen name="Favourites" component={Favourites} />
      </Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
