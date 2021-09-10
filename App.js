import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import CarCard from './app/components/car-card';
import logo from './app/assets/images/Model3.jpeg';

export default function App() {
  return (
    <View style={styles.container}>
      <CarCard title="Model S" tagline="Starting from $69,420" image={logo} />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
