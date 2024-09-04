import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles'; // Ensure styles are correctly imported
import TextInputWithLabel from '../../components/TextInputWithLabel';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://plus.unsplash.com/premium_photo-1664303751783-e18caf8f609d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JiaWtlfGVufDB8fDB8fHww' }}
                style={styles.imgstyle}
            >
                <Text style={styles.imgtext}>LOGIN</Text>
            </ImageBackground>

            <View style={styles.inputContainer}>
                <TextInputWithLabel 
                    label='Email Address'
                    placeholder='Enter Your Email Address'
                    // onChangeText={(text) => console.log(text)}
                    inputStyle={{ marginBottom: responsiveHeight(3)}}
                    keyboardType='email-address'
                />
                <TextInputWithLabel 
                    label='Password'
                    placeholder='Enter Your Password'
                    secureTextEntry={true}
                />
            </View>
        </View>
    );
};

export default Login;
