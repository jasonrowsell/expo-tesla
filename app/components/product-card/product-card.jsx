import React from 'react';
import {
  View, Text, ImageBackground, StyleSheet, Alert, Dimensions, Animated,
} from 'react-native';
import PropTypes from 'prop-types';

import ButtonOption from '../button-option';

const { height } = Dimensions.get('screen');

export default function ProductCard({
  title, tagline, image, scrollY, index, buttonContent, termsLinks,
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
        </Text>
      </Animated.View>

      <Animated.View style={[styles.buttonsContainer, { opacity }]}>
        <ButtonOption
          type="primary"
          content={buttonContent}
          onPress={() => Alert.alert(`${buttonContent} was pressed`)}
        />
      </Animated.View>

      { termsLinks && (
        <Animated.View style={[styles.termsLinks, { opacity }]}>
          <Text style={styles.terms}>
            {tagline}
          </Text>
        </Animated.View>
      )}

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
    fontSize: 35,
    paddingBottom: 5,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 17,
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
    bottom: 80,
    width: '100%',
  },
});

ProductCard.defaultProps = {
  title: null,
  tagline: null,
  image: null,
  scrollY: null,
  index: null,
  buttonContent: null,
  termsLinks: false,
};

ProductCard.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  image: PropTypes.node,
  scrollY: PropTypes.shape({}),
  index: PropTypes.number,
  buttonContent: PropTypes.string,
  termsLinks: PropTypes.bool,
};
