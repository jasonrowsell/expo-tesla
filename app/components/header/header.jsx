import React, { useState } from 'react';
import {
  View, Image, StyleSheet, TouchableHighlight, Text, Modal, ScrollView,
} from 'react-native';

export default function Header() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={isModalVisible}
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <TouchableHighlight onPress={() => setModalVisible(false)}>
              <Image style={styles.close} source={require('../../assets/images/menu.png')} />
            </TouchableHighlight>
          </View>
          <ScrollView style={styles.modalMenu}>
            <Text>Hello</Text>
            <Text>Model 3</Text>
            <Text>Model X</Text>
          </ScrollView>
        </View>
      </Modal>
      <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
      <TouchableHighlight onPress={() => handleModal()}>
        <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  close: {
    width: 25,
    height: 25,
  },
  modalHeader: {
    flex: 1,
    top: 50,
    width: '100%',
    marginLeft: 'auto',
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  modalView: {
    flex: 1,
    alignItems: 'flex-end',
    marginLeft: 'auto',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 310,
  },
  modalMenu: {
    flex: 1,
    bottom: 320,
    marginHorizontal: 40,
    marginRight: 'auto',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
