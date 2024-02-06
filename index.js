/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
// import AmountScreen from './src/screens/AmountScreen/AmountScreen';

AppRegistry.registerComponent(appName, () => HomeScreen);
