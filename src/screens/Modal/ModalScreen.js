import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Colors from '../../Styles/Colors';
import ButtonComponent from '../../components/ButtonComponent';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import styles from './styles';
const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    city: '',
    state: '',
    email: ''
  });
  const [errors, setErrors] = useState({
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

    if (value.trim()) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  const validateFields = () => {
    const newErrors = {};

    if (!formValues.name.trim()) newErrors.name = '** Name is required **';
    if (!formValues.city.trim()) newErrors.city = '** City is required **';
    if (!formValues.state.trim()) newErrors.state = '** State is required **';
    if (!formValues.email.trim()) newErrors.email = '** Email is required **';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    if (validateFields()) {
      // Close modal if no errors
      setModalVisible(false);
      setFormValues({
        name: '',
        city: '',
        state: '',
        email: ''
      });
      setErrors({
        name: '',
        city: '',
        state: '',
        email: ''
      });
    }
  };

  return (
    <View style={styles.container}>
      <ButtonComponent
        btnText={'FILL UP'}
        onPress={handleOpenModal}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <Text style={styles.modalTitle}>Please Fill Out the Details</Text>
              <View style={styles.inputContainer}>
                <TextInputWithLabel
                  label={'Name'}
                  style={styles.input}
                  placeholder="Name"
                  value={formValues.name}
                  onChangeText={(text) => handleInputChange('name', text)}
                />
                {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
              </View>
              <View style={styles.inputContainer}>
                <TextInputWithLabel
                  label={'City'}
                  style={styles.input}
                  placeholder="City"
                  value={formValues.city}
                  onChangeText={(text) => handleInputChange('city', text)}
                />
                {errors.city ? <Text style={styles.errorText}>{errors.city}</Text> : null}
              </View>
              <View style={styles.inputContainer}>
                <TextInputWithLabel
                  label={'State'}
                  style={styles.input}
                  placeholder="State"
                  value={formValues.state}
                  onChangeText={(text) => handleInputChange('state', text)}
                />
                {errors.state ? <Text style={styles.errorText}>{errors.state}</Text> : null}
              </View>
              <View style={styles.inputContainer}>
                <TextInputWithLabel
                  label={'Email'}
                  style={styles.input}
                  placeholder="Email"
                  value={formValues.email}
                  onChangeText={(text) => handleInputChange('email', text)}
                />
                {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
              </View>
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};



export default ModalScreen;
