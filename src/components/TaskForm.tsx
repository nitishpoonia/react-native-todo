import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';

type TaskFormProps = {
  navigation: NavigationProp<any>;
};
const TaskForm = ({navigation}: TaskFormProps) => {
  return (
    <View>
      <Text>TaskForm</Text>
      <Button onPress={() => navigation.navigate('Home')}>Home</Button>
    </View>
  );
};

export default TaskForm;

const styles = StyleSheet.create({});
