import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import styles from '../Register/styles'
import ButtonComponent from '../../components/ButtonComponent'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import navigationStrings from '../../constants/navigationStrings'
import imagePath from '../../constants/imagePath'
const Register = ({navigation}) => {
    const [isvisible,SetIsvisible]=useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titletext}>Register</Text>
            </View>

            <View style={styles.inputcontainer}>
                <TextInputWithLabel
                    label={'First Name'}
                    placeholder={'Enter Your First Name'}
               
                />
                <TextInputWithLabel
                    label={'Last Name'}
                    placeholder={'Enter Your Last Name'}
                />
                <TextInputWithLabel
                    label={'Email Adress'}
                    placeholder={'Enter Your Email'}
                   keyboardType='email-address'
                />
                <TextInputWithLabel
                    label={'Password'}
                    placeholder={'Enter Your Password'}
                    secureTextEntry={!isvisible}
                    righticon={isvisible ? imagePath.ShowEye : imagePath.HideEye}
                    onPressright={()=>SetIsvisible(!isvisible)}
                />
             
            </View>
            <View>
                <ButtonComponent 
                btnText={'SIGN UP'}
                onPress={()=>navigation.navigate(navigationStrings.LOGIN)}
                />
            </View>
            <View style={styles.alreadyhaveanacc}>
                <Text style={styles.alreadyhaveanacctext}>Already Have an Account ?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.LOGIN)}>
                    <Text style={styles.signintext}>Sign in</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Register

