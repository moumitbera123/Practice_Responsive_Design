import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Colors from '../../Styles/Colors';
import ButtonComponent from '../../components/ButtonComponent';
import TextInputWithLabel from '../../components/TextInputWithLabel';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    city: '',
    state: '',
    email: ''
  });

  const handleInputChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value
    });
  };

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setFormValues({
      name: '',
      city: '',
      state: '',
      email: ''
    });
  };

  return (
    <View style={styles.container}>
      <ButtonComponent
        btnText={'SUBMIT'}
        onPress={handleSubmit}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Please Fill Out the Details</Text>
            <TextInputWithLabel
              label={'Name'}
              style={styles.input}
              placeholder="Name"
              value={formValues.name}
              onChangeText={(text) => handleInputChange('name', text)}
              inputStyle={{ marginBottom: responsiveHeight(1)}}
            />
            <TextInputWithLabel
              label={'City'}
              style={styles.input}
              placeholder="City"
              value={formValues.city}
              onChangeText={(text) => handleInputChange('city', text)}
              inputStyle={{ marginBottom: responsiveHeight(1)}}
            />
            <TextInputWithLabel
              label={'State'}
              style={styles.input}
              placeholder="State"
              value={formValues.state}
              onChangeText={(text) => handleInputChange('state', text)}
              inputStyle={{ marginBottom: responsiveHeight(1)}}
            />
            <TextInputWithLabel
              label={'Email'}
              style={styles.input}
              placeholder="Email"
              value={formValues.email}
              onChangeText={(text) => handleInputChange('email', text)}
            />
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveWidth(5),
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: responsiveHeight(6),
    width: responsiveWidth(65),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(5),
    fontSize: responsiveFontSize(2),
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BlackOpacity,
  },
  modalContainer: {
    width: responsiveWidth(85), // Adjusted width for responsiveness
    padding: responsiveWidth(5),
    backgroundColor: Colors.White,
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    maxHeight: responsiveHeight(70), // To ensure modal does not overflow screen height
  },
  modalTitle: {
    fontSize: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(3),
    textAlign: 'center',
    fontWeight: 'bold',
    color:Colors.ThemeColor
  },
  closeButton: {
    marginTop: responsiveHeight(2),
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: Colors.ThemeColor,
    borderRadius: 5,
  },
  closeButtonText: {
    color: Colors.White,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    height:responsiveHeight(3),
    width:responsiveWidth(20),
  },
});

export default ModalScreen;
