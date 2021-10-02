import React from 'react';
import {
  View, Text, ImageBackground, StyleSheet, Alert, Dimensions, Animated,
} from 'react-native';
import PropTypes from 'prop-types';

import ButtonOption from '../button-option';

const { height } = Dimensions.get('screen');

/**
 * Card component that wraps car model details, will change opacity in
 * relation to its screen y-coordinate.
 *
 * @param {string} title Title of the car model
 * @param {string} tagline Follow-up subtitle in regards to the car model
 * @param {string} taglineCTA Appended CTA with ref link
 * @param {node} image Image of the car model
 * @param {object} scrollY Current y-coordinate position on the screen
 * @param {number} index nth value in the list of items
 *
 * @return {JSX.Element}
 */
export default function CarCard({
  title, tagline, taglineCTA, image, scrollY, index,
}) {
  const inputRangeOpacity = [
    (index - 0.3) * height,
    index * height,
    (index + 0.3) * height,
  ];

  // eslint-disable-next-line react/prop-types
  const opacity = scrollY?.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0.3, 1, 0.3],
  });

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <Animated.View style={[styles.header, { opacity }]}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </Animated.View>

      <Animated.View style={[styles.buttonsContainer, { opacity }]}>
        <ButtonOption
          type="primary"
          content="Custom Order"
          onPress={() => Alert.alert('Custom Order was pressed')}
        />
        <ButtonOption
          type="secondary"
          content="Existing Inventory"
          onPress={() => Alert.alert('Existing Inventory was pressed')}
        />
      </Animated.View>

    </View>
  );
}

CarCard.defaultProps = {
  title: null,
  tagline: null,
  taglineCTA: null,
  image: null,
  scrollY: null,
  index: null,
};

CarCard.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  taglineCTA: PropTypes.string,
  image: PropTypes.node,
  scrollY: PropTypes.shape({}),
  index: PropTypes.number,
};

const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: '100%',
  },

  header: {
    alignItems: 'center',
    marginTop: '30%',
    width: '100%',
  },

  title: {
    display: 'flex',
    fontSize: 40,
    fontWeight: '500',
    paddingBottom: 5,
  },

  subtitle: {
    color: '#5c5e62',
    fontSize: 17,
  },

  subtitleCTA: {
    textDecorationLine: 'underline',
  },

  image: {
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
  },

  buttonsContainer: {
    bottom: 70,
    position: 'absolute',
    width: '100%',
  },
});
