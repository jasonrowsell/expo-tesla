import React, { useState } from 'react';
import {
  View, Image, StyleSheet, TouchableHighlight,
} from 'react-native';

import MenuModal from '../menu-modal';

export default function Header() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      { isModalVisible && (
        <MenuModal onClose={() => setModalVisible(false)} />
      )}

      { !isModalVisible && (
        <>
          <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
          <TouchableHighlight onPress={() => handleModal()}>
            <Image style={styles.menuIcon} source={require('../../assets/images/menu.png')} />
          </TouchableHighlight>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 50,
    width: '100%',
    zIndex: 1,
  },

  logo: {
    height: 20,
    resizeMode: 'contain',
    width: 100,
  },

  menuIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
