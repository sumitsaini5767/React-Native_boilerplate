import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/Home/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type MainStackParamList = {
    Home: undefined;
    // Add other screens and their parameters here if needed
  };


  const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
    </>
  )
}

export default MainStack

const styles = StyleSheet.create({})