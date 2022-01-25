import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function ChangeForm({ changeHandler, id }) {
  const [value, setValue] = useState("");

  const onChange = (text) => {
    setValue(text)
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder='write task'
      />

      <Button title='add' onPress={() => changeHandler(id.key, value)} />
    </View>
  );
}

const styles = StyleSheet.create({



  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});

