import moment from 'moment'
import { StyleSheet, View, Text, TextInput, Button, FlatList, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherRequest } from '../redux/actions/getWeatherCreator';

export default function SecondScreen() {

  const newDate = (ts) => {
    let data = moment(ts).format("MMM Do YY")
    console.log(data)
  }


  const [city, setCity] = useState("")
  const dispatch = useDispatch()

  const { weather: { currentTemprature, tempForWeek, tempForNextHours } } = useSelector((state) => state)
  console.log(tempForNextHours)
  const onChange = (text) => {
    setCity(text)
  }

  const submitHandler = (city) => {
    dispatch(getWeatherRequest(city))
  }

  return (

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={city}
      />
      <Button title='submit' onPress={() => submitHandler(city)} />

      <View>
        <FlatList data={currentTemprature} renderItem={({ item }) => {
          return <Text> {item.city} {item.temp}</Text>
        }} />
      </View>

      <ScrollView  >
        <Text> Weather for next hours</Text>
        <FlatList horizontal={true} data={tempForNextHours} renderItem={({ item }) => {
          return <Text style={styles.text}> {moment(item.dt * 1000).format('h')} {"\n"} {Math.ceil(item.temp - 273)}</Text>

        }} />

        <FlatList data={tempForWeek} renderItem={({ item }) => {
          return <Text> {moment(item.dt * 1000).format("dddd")} {Math.ceil(item.temp.day - 273)} </Text>
        }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1
  },
  text: {
    fontSize: 15,
  }
});
