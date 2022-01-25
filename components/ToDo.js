import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import { useState } from 'react';
import ToDoForm from './ToDoForm';
import { useSelector } from 'react-redux';






export default function ToDo({ navigation }) {

  // const [listOfItem, setListOfItem] = useState([
  // ])

  const tasks = useSelector(({ tasks }) => tasks)

  const taskhandler = (value) => {
    return setListOfItem((list) => {
      return [

        { text: value, key: Date.now() },
        ...list,
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItem((list) => {
      return list.filter(listOfItem => listOfItem.key !== key)
    })
  }

  const changeHandler = (key, value) => {
    const copy = listOfItem.map(elem => {
      if (elem.key === key) {

        return { ...elem, text: value }
      }
      return elem
    })
    setListOfItem(copy)
  }


  return (
    <View style={styles.container}>
      <Button title='to second screen' onPress={() => navigation.navigate('second')} />
      <View>
        <ToDoForm taskhandler={taskhandler} />
      </View>
      <View>

        <FlatList
          data={tasks} renderItem={({ task }) => {
            return <Text> {task.text}  </Text>
          }}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    fontSize: 40
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
