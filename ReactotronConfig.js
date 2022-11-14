import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron;

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({host: '192.168.0.36', port: 9090}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reduxPlugin())
  .use(sagaPlugin())
  .connect(); // let's connect!

export default reactotron;
