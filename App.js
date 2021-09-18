import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemsList from './app/components/items-list';
import Header from './app/components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ItemsList />
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
