import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};
const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate('TaskForm')}>Task Form</Button>
    </View>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({});
