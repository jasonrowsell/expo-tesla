import React, { useState, useRef, useEffect } from 'react';
import {
  View, Image, StyleSheet, TouchableOpacity, Animated,
} from 'react-native';
import PropTypes from 'prop-types';

import Overlay from '../overlay';

/**
 * Pop-up component wrapped in an overlay, will render in response to clicking on
 * a child component. Closes in reponse to closing the modal.
 *
 * @param {node} children Children components that will be wrapped by the component
 * @param {function} onClose Function to close the form from the parent component
 *
 * @return {JSX.Element}
 */
export default function MenuModal({ children, onClose }) {
  const [overlayIsOpen, setOverlayIsOpen] = useState(true);

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (overlayIsOpen) {
      Animated.timing(
        animatedValue,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        },
      ).start();
    }
  }, [overlayIsOpen]);

  const handleClose = () => {
    setOverlayIsOpen(false);
    onClose();
  };

  return (
    <Overlay open={overlayIsOpen} animatedValue>
      <Animated.View style={[styles.container, {
        transform: [
          {
            translateX: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0],
            }),
          },
        ],
      }]}
      >
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={() => handleClose()} style={styles.iconContainer}>
            <Image style={styles.closeIcon} source={require('../../assets/images/close.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.children}>
          {children}
        </View>
      </Animated.View>
    </Overlay>
  );
}

MenuModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    elevation: 2,
    flex: 1,
    height: '100%',
    marginLeft: 'auto',
    marginRight: 0,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: 310,
    zIndex: 1,
  },

  children: {
    display: 'flex',
    paddingLeft: 40,
    marginTop: 100,
    marginBottom: 40,
  },

  iconContainer: {
    height: 30,
    width: 30,
  },

  closeIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },

  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    top: 50,
    width: '100%',
  },
});
