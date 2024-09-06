import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import PropTypes from 'prop-types';
import imagePath from '../constants/imagePath';
import Colors from '../Styles/Colors';

const TextInputWithLabel = ({ label, placeholder, onChangeText = () => { }, inputStyle = {}, righticon,onPressright, ...props }) => {
    return (
        <View style={[styles.inputContainer, inputStyle]}>
            <Text style={styles.labelText}>{label}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    style={styles.textInput}
                    {...props}
                />

                {righticon ? <TouchableOpacity onPress={onPressright}>
                    <Image source={righticon} style={{ height: responsiveHeight(3), width: responsiveWidth(6) }} />
                </TouchableOpacity>
                    : null

                }

            </View>

        </View>
    );
};

TextInputWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    inputStyle: PropTypes.object,
    righticon: PropTypes.number,
    onPressright:PropTypes.func,
};

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomWidth: 0.6,
        borderColor: Colors.BlackOpacity,
        borderRadius: responsiveWidth(6),
        paddingHorizontal: responsiveWidth(6),
    },
    labelText: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: Colors.Black,
        marginBottom: responsiveHeight(1),
    },
    textInput: {
        fontSize: responsiveFontSize(2),
        color: Colors.BlackOpacity,
        flex:1
    },
});

export default TextInputWithLabel;
