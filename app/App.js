import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';
import Home from './screens/home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}

registerRootComponent(App);
