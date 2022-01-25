import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react/cjs/react.development';

import ChangeForm from './ChangeForm';



export default function Listitem({ changeHandler, deleteHandler, elem }) {

  const [isOn, setIsOn] = useState(false);



  return (
    <View style={styles.container}>
      <Text style={styles.text}> {elem.text} <Button title='delete' onPress={() => deleteHandler(elem.key)} /> <Button title='change task' onPress={() => setIsOn(!isOn)} /> </Text>
      {isOn && <ChangeForm changeHandler={changeHandler} id={elem} />}
    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 20,
    textAlign: "center",
  },
  container: {
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
  }
})

