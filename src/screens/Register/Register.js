import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import navigationStrings from '../../constants/navigationStrings';
import { useNavigation } from '@react-navigation/native';
const Register = () => {
    const navigation = useNavigation();

    const navigatetonextscreen = () => {
      navigation.navigate(navigationStrings.FORGOT_PASSWORD);
    };
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={navigatetonextscreen}>
                <Text style={styles.buttonText}>Go to Register</Text>
            </TouchableOpacity>
            <Text>Register</Text>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})