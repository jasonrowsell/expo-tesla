import React from 'react';
import {
  StyleSheet, ScrollView, Text,
} from 'react-native';
import menuLinks from './menu-links';

export default function MenuItems() {
  return (
    <ScrollView style={styles.container}>
      {menuLinks.map((link) => (
        <Text key={link} style={styles.linkText}>
          {link}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingLeft: 40,
    marginTop: 100,
    marginBottom: 40,
  },

  linkText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 30,
    color: 'rgb(57, 60, 65)',
  },
});
