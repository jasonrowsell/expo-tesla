import React, { useState } from 'react';
import {
  View, Image, StyleSheet, TouchableOpacity,
} from 'react-native';

import MenuModal from '../menu-modal';
import MenuItems from '../menu-items';

/**
 * Sticky header component for displaying the logo and the menu icon,
 * the menu opens to a nav menu
 *
 * @return {JSX.Element}
 */
export default function Header() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      { isModalVisible ? (
        <MenuModal onClose={() => setModalVisible(false)}>
          <MenuItems />
        </MenuModal>
      ) : (
        <>
          <Image style={styles.logo} source={require('../../assets/images/icons/logo.png')} />
          <TouchableOpacity onPress={() => handleModal()} style={styles.iconContainer} testID="menu-icon">
            <Image style={styles.menuIcon} source={require('../../assets/images/icons/menu.png')} />
          </TouchableOpacity>
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

  iconContainer: {
    height: 30,
    width: 30,
  },

  menuIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  linkText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 30,
    color: 'rgb(57, 60, 65)',
  },
});
