import React from 'react';
import {
  View, Text, Pressable, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default function ButtonOption({ type, content, onPress }) {
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const color = type === 'primary' ? '#FFFFFF' : '#171A20';

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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

ButtonOption.defaultProps = {
  type: null,
  content: null,
};

ButtonOption.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};
