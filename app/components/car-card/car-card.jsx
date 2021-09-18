import React from 'react';
import {
  View, Text, ImageBackground, StyleSheet, Alert, Dimensions, Animated,
} from 'react-native';
import PropTypes from 'prop-types';

import ButtonOption from '../button-option';

const { height } = Dimensions.get('screen');

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
          onPress={() => Alert.alert('Custom order was pressed')}
        />
        <ButtonOption
          type="secondary"
          content="Available Inventory"
          onPress={() => Alert.alert('Available inventory was pressed')}
        />
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('screen').height,
  },
  header: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    fontSize: 40,
    paddingBottom: 5,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 17,
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
