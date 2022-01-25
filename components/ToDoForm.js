import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { createTask } from "./../redux/actions/taskCreator"

export default function ToDoForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch()

  const onChange = (text) => {
    setValue(text)
  }

  const addTaskHandler = (payload) => {
     dispatch(createTask(payload))
  }

  return (
    <View >

      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder='write task'
      />

      <Button title='add' onPress={() => addTaskHandler(value)} />
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1
  },
});

