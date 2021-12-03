/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Products from './src/screens/Products';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Products);
