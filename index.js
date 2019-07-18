/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';

// AppRegistry.registerComponent(appName, () => App);

// * Import Library to help create a copmonent
import React from "react";
import ReactNative, { Text, View } from "react-native";
import { name as appName } from "./app.json";

import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

// * Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText="Albums" />
    <AlbumList />
  </View>
);

// * Render it to Device
ReactNative.AppRegistry.registerComponent(appName, () => App);
