import { StyleSheet, View, } from 'react-native';
import ToDo from './components/ToDo';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store';
import SecondScreen from './components/SecondScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <Provider store={store}>

      <NavigationContainer >
        <Tab.Navigator>

          <Tab.Screen name='todo' component={ToDo} />
          <Tab.Screen name='second' component={SecondScreen} />

        </Tab.Navigator>
        {/* <Stack.Navigator initialRouteName='todo'> */}
        {/* <Stack.Screen name='todo' component={ToDo} />
          <Stack.Screen name='second' component={SecondScreen} /> */}
        {/* </Stack.Navigator> */}

      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
