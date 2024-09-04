import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import PropTypes from 'prop-types';

const TextInputWithLabel = ({ label, placeholder, onChangeText = () => {}, inputStyle = {}, ...props }) => {
    return (
        <View style={[styles.inputContainer, inputStyle]}>
            <Text style={styles.labelText}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={styles.textInput}
                {...props}
            />
        </View>
    );
};

TextInputWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    inputStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomWidth: 1,
        borderColor: '#b8bab9',
        borderRadius: responsiveWidth(6),
        // marginBottom: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(6),
        // paddingVertical: responsiveHeight(1),
    },
    labelText: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: responsiveHeight(1),
    },
    textInput: {
        fontSize: responsiveFontSize(2),
        color: '#000000',
    },
});

export default TextInputWithLabel;
