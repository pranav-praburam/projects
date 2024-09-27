// Fixed TabTwo.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Button, Image } from 'react-native';

// Step 1: Import the images
// Adjust the import paths to use relative paths
import popup1 from '../assets/popup1.webp';
import popup2 from '../assets/popup2.webp';
import popup3 from '../assets/popup3.webp';
import popup4 from '../assets/popup4.webp';

function TabTwo() {
  // Step 2: Update state to include image
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalImage, setModalImage] = useState(null); // Initialize with null or a default image

  // Step 3: Pass image to handleBoxPress function
  const handleBoxPress = (text, popupMessage, image) => {
    setModalText(popupMessage);
    setModalImage(image); // Set the image in the state
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
    {/* Pass the corresponding image when calling handleBoxPress */}
    <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('1 minute of Sobriety', 'Congratulations on 1 minute of sobriety!', popup1)}>
      <Text style={styles.boxText}>1 minute of Sobriety</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('1 week of Sobriety', 'Great job on achieving 1 week of sobriety!', popup2)}>
      <Text style={styles.boxText}>1 week of Sobriety</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('1 month of Sobriety', 'Amazing! 1 month of sobriety is a significant milestone!', popup3)}>
      <Text style={styles.boxText}>1 month of Sobriety</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('1 year of Sobriety', 'Incredible achievement! 1 year of sobriety is truly commendable!', popup4)}>
      <Text style={styles.boxText}>1 year of Sobriety</Text>
    </TouchableOpacity>

      {/* Step 4: Use the image state in the Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalText}</Text>
            <Image source={modalImage} style={styles.image} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  box: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#841584'
  },
  boxText: {
    color: '#fff',
    fontSize: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%', // adjust this value to change the width
    height: '60%', // adjust this value to change the height
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    marginBottom: 15,
  }
});

export default TabTwo;
