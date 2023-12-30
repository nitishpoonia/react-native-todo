import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Icon} from 'react-native-paper';
const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState({});
  // const dummyData = [
  //   {
  //     id: 1,
  //     title: 'Task 1',
  //   },
  //   {
  //     id: 2,
  //     title: 'Task 2',
  //   },
  //   {
  //     id: 3,
  //     title: 'Task 3',
  //   },
  // ];

  const handleTodo = () => {
    if (todo === '') {
      return;
    }
    setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
    setTodo('');
  };
  const handleEdit = () => {
    setEditedTodo(todo);
    setTodoList(todo.title);
  };
  return (
    <View>
      <TextInput
        label="Task"
        value={todo}
        onChangeText={userText => setTodo(userText)}
        placeholder="Add a Task"
      />
      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            {/* <Icon name="pencil" onPress={handleEdit} /> */}
          </View>
        )}
      />
      <Button mode="contained" style={styles.taskButton} onPress={handleTodo}>
        Add Task
      </Button>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  taskButton: {
    width: '50%',
    marginTop: 10,
  },
});
