import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Dimensions,
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
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(open);

  useEffect(() => {
    if (open) {
      setShouldRenderOverlay(true);
    } else {
      setShouldRenderOverlay(false);
    }
  }, [open]);

  return (
    <>
      {shouldRenderOverlay && (
        <View style={styles.container}>
          {children}
        </View>
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
