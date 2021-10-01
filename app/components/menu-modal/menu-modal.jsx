import React, { useState } from 'react';
import {
  View, Image, StyleSheet, TouchableHighlight,
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

  const handleClose = () => {
    setOverlayIsOpen(false);
    onClose();
  };

  return (
    <Overlay open={overlayIsOpen}>
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <TouchableHighlight onPress={() => handleClose()}>
            <Image style={styles.closeIcon} source={require('../../assets/images/menu.png')} />
          </TouchableHighlight>
        </View>
        {children}
      </View>
    </Overlay>
  );
}

MenuModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 2,
    flex: 1,
    height: '100%',
    marginLeft: 'auto',
    marginRight: 0,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: 320,
    zIndex: 1,
  },

  closeIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    top: 50,
    width: '100%',
  },
});
