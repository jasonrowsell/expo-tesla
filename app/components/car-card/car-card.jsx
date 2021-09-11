import React from 'react';
import {
  View, Text, ImageBackground, StyleSheet, Alert, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import ButtonOption from '../button-option';

export default function CarCard({
  title, tagline, taglineCTA, image,
}) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>

      </View>

      <View style={styles.buttonsContainer}>
        <ButtonOption
          type="primary"
          content="Custom Order"
          onPress={() => Alert.alert('Custom order was pressed')}
        />
        <ButtonOption
          type="secondary"
          content="Existing Inventory"
          onPress={() => Alert.alert('Existing inventory was pressed')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('screen').height,
  },
  header: {
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
  subtitleCTA: {
    textDecorationLine: 'underline',
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
  taglineCTA: null,
  image: null,
};

CarCard.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  taglineCTA: PropTypes.string,
  image: PropTypes.node,
};
