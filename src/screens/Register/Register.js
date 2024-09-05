import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import ButtonComponent from '../../components/ButtonComponent';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import navigationStrings from '../../constants/navigationStrings';
import imagePath from '../../constants/imagePath';
import styles from './styles'; // Ensure correct import path

const Register = ({ navigation }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.innerContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titletext}>Register</Text>
                    </View>

                    <View style={styles.inputcontainer}>
                        <TextInputWithLabel
                            label={'First Name'}
                            placeholder={'Enter Your First Name'}
                            inputStyle={{ marginBottom: responsiveHeight(2) }}
                        />
                        <TextInputWithLabel
                            label={'Last Name'}
                            placeholder={'Enter Your Last Name'}
                            inputStyle={{ marginBottom: responsiveHeight(2) }}
                        />
                        <TextInputWithLabel
                            label={'Email Address'}
                            placeholder={'Enter Your Email'}
                            keyboardType='email-address'
                            inputStyle={{ marginBottom: responsiveHeight(2) }}
                        />
                        <TextInputWithLabel
                            label={'Password'}
                            placeholder={'Enter Your Password'}
                            secureTextEntry={!isPasswordVisible}
                            righticon={isPasswordVisible ? imagePath.ShowEye : imagePath.HideEye}
                            onPressright={() => setIsPasswordVisible(!isPasswordVisible)}
                            inputStyle={{ marginBottom: responsiveHeight(2) }}
                        />
                        <TextInputWithLabel
                            label={'Confirm Password'}
                            placeholder={'Confirm Your Password'}
                            secureTextEntry={!isConfirmPasswordVisible}
                            righticon={isConfirmPasswordVisible ? imagePath.ShowEye : imagePath.HideEye}
                            onPressright={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                            inputStyle={{ marginBottom: responsiveHeight(2) }}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <ButtonComponent 
                            btnText={'SIGN UP'}
                            onPress={() => navigation.navigate(navigationStrings.LOGIN)}
                        />
                    </View>

                    <View style={styles.alreadyhaveanacc}>
                        <Text style={styles.alreadyhaveanacctext}>Already Have an Account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
                            <Text style={styles.signintext}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Register;
