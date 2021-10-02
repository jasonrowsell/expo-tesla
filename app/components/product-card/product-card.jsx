import React from 'react';
import {
  View, Text, ImageBackground, StyleSheet, Alert, Dimensions, Animated,
} from 'react-native';
import PropTypes from 'prop-types';

import ButtonOption from '../button-option';

const { height } = Dimensions.get('screen');

/**
 * Card component that wraps product details, will change opacity in
 * relation to its screen y-coordinate.
 *
 * @param {string} title Title of the product
 * @param {string} tagline Follow-up subtitle in regards to the product
 * @param {node} image Image of the product
 * @param {object} scrollY Current y-coordinate position on the screen
 * @param {number} index nth value in the list of items
 * @param {string} buttonContent String that is displayed inside of the button
 * @param {boolean} termsLinks Optional rendering of footer links
 *
 * @return {JSX.Element}
 */
export default function ProductCard({
  title, tagline, image, scrollY, index, termsLinks,
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

  const primaryContent = termsLinks ? 'Shop Now' : 'Order Now';

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
      <Animated.View style={
        [termsLinks ? styles.buttonsContainerTerms : styles.buttonsContainer, { opacity }]
      }
      >
        <ButtonOption
          type="primary"
          content={primaryContent}
          onPress={() => Alert.alert(`${primaryContent} was pressed`)}
        />
        { !termsLinks && (
          <ButtonOption
            type="secondary"
            content="Learn More"
            onPress={() => Alert.alert('Learn More was pressed')}
          />
        )}
      </Animated.View>

      { termsLinks && (
        <Animated.View style={[styles.termsLinks, { opacity }]}>
          <Text style={styles.terms}>
            Jason Rowsell © 2021
          </Text>
          <Text style={styles.terms}>
            Privacy & Legal
          </Text>
          <Text style={styles.terms}>
            Careers
          </Text>
          <Text style={styles.terms}>
            News
          </Text>
        </Animated.View>
      )}
    </View>
  );
}

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

const styles = StyleSheet.create({
  carContainer: {
    display: 'flex',
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
    fontSize: 35,
    fontWeight: '500',
    paddingBottom: 5,
  },

  subtitle: {
    color: '#5c5e62',
    fontSize: 17,
  },

  image: {
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
  },

  buttonsContainerTerms: {
    display: 'flex',
    marginTop: 400,
    width: '100%',
  },

  buttonsContainer: {
    bottom: 70,
    position: 'absolute',
    width: '100%',
  },

  termsLinks: {
    alignItems: 'center',
    display: 'flex',
    marginTop: 70,
    width: '100%',
  },

  terms: {
    color: '#46484d',
    fontSize: 15,
    margin: 5,
  },
});
