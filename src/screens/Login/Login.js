import React, { useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Ensure styles are correctly imported
import TextInputWithLabel from '../../components/TextInputWithLabel';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import imagePath from '../../constants/imagePath';
import ButtonComponent from '../../components/ButtonComponent';
import navigationStrings from '../../constants/navigationStrings';

const Login = ({ navigation }) => {
    const [isvisible,SetIsvisible]=useState(false)
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
                    inputStyle={{ marginBottom: responsiveHeight(3)}}
                    keyboardType='email-address'
                />
                <TextInputWithLabel 
                    label='Password'
                    placeholder='Enter Your Password'
                    secureTextEntry={!isvisible}
                    righticon={isvisible ? imagePath.ShowEye : imagePath.HideEye}
                    onPressright={()=>SetIsvisible(!isvisible)}
                />
                <TouchableOpacity style={styles.forgotview} activeOpacity={(0.5)}>
                    <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>
             <ButtonComponent 
             btnText={'LOGIN'}
             onPress={()=>{
                navigation.navigate(navigationStrings.HOMESTACK)}}
             />
            </View>
            <View style={styles.notamember}>
                <Text style={styles.notamembertext}>Not a Member ?</Text>
                <TouchableOpacity  onPress={()=>navigation.navigate(navigationStrings.REGISTER)}>
                    <Text style={styles.notamembertext1}>Join Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
