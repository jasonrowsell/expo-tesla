import React from 'react';
import {
  View, Text, Pressable, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../constants';

/**
 * Button component for selecting an option, will render a style of either
 * primary or secondary based on the received prop.
 *
 * @param {string} type optional styling for the button
 * @param {string} content string that is displayed inside of the button
 * @param {function} onPress functionality provided when button is clicked
 *
 * @return {JSX.Element}
 */
export default function ButtonOption({ type, content, onPress }) {
  const backgroundColor = type === 'primary' ? colors.darkGray : colors.mediumWhite;
  const color = type === 'primary' ? colors.white : colors.darkGray;

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={onPress}
        testID="button"
      >
        <Text style={[styles.text, { color }]}>{content}</Text>
      </Pressable>
    </View>
  );
}

ButtonOption.defaultProps = {
  type: null,
  content: null,
};

ButtonOption.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },

  button: {
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
  },

  text: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
