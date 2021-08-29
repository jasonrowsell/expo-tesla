import React from 'react';
import {
  View, Text, ImageBackground, StyleSheet, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

export default function CarCard({ title, tagline, image }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {tagline}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

CarCard.defaultProps = {
  title: null,
  tagline: null,
  image: null,
};

CarCard.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  image: PropTypes.node,
};
