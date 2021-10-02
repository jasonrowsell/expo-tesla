import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet, Dimensions, Animated,
} from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('screen');

/**
 * Overlay wrapper around a component, will render in response to an open/close check
 *
 * @param {node} children Children components that will be wrapped by the component
 * @param {boolean} open Boolean whether or not the wrapper is open or not
 *
 * @return {JSX.Element}
 */
export default function Overlay({ children, open }) {
  const [shouldRenderOverlay] = useState(open);

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (open) {
      Animated.timing(
        animatedValue,
        {
          toValue: 1,
          duration: 250,
          useNativeDriver: false,
        },
      ).start();
    }
  }, [open]);

  return (
    <>
      {shouldRenderOverlay && (
        <Animated.View style={[styles.container, { opacity: animatedValue }]}>
          {children}
        </Animated.View>
      )}
    </>
  );
}

Overlay.defaultProps = {
  open: null,
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    height,
    left: 0,
    position: 'absolute',
    top: -50,
    width,
  },
});
