/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Yego from './Yego';
import { name as appName } from './app.json';
import Mapbox from '@rnmapbox/maps';

// public key for the technical test
Mapbox.setAccessToken("pk.eyJ1IjoidG9ybWVsaW5lYW4iLCJhIjoiY2xyNmNjNmcwMjhodDJzcG41cGh1cHFhMyJ9.MuxxMkhxEHHaJdRX6nxGeA");

AppRegistry.registerComponent(appName, () => Yego);
