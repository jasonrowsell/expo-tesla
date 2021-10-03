import React from 'react';
import {
  View, StyleSheet, ScrollView, Text, Image,
} from 'react-native';
import menuLinks from '../../mockdata/menu-links';

export default function MenuItems() {
  return (
    <ScrollView style={styles.container}>
      {menuLinks.map((link) => (
        <Text key={link.title} style={styles.linkText}>
          {link.title}
        </Text>
      ))}
      <View style={styles.moreContainer}>
        <Text style={styles.linkText}>
          More
        </Text>
        <Image style={styles.moreIcon} source={require('../../assets/images/more.png')} />
      </View>
      <View style={styles.languageContainer}>
        <Image style={styles.globeIcon} source={require('../../assets/images/globe.png')} />
        <View style={styles.languageTextContainer}>
          <Text style={styles.countryText}>
            United States
          </Text>
          <Text style={styles.languageText}>
            English
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingLeft: 40,
    marginTop: 80,
    marginBottom: 40,
  },

  moreContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  moreIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 40,
    marginTop: 5,
  },

  linkText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 30,
    color: 'rgb(57, 60, 65)',
  },

  languageContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  languageTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
  },

  countryText: {
    color: 'rgb(57, 60, 65)',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },

  languageText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgb(57, 60, 65)',
  },

  globeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
