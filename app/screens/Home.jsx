import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemsList from '../components/items-list';
import Header from '../components/header';

export default function Home() {
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
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
