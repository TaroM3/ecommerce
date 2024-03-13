import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { fonts } from '../../utils/global/fonts';
import colors from '../../utils/global/colors';

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder=''
        style={styles.input}
        secureTextEntry={isSecure}
      />
      {error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: { width: '100%' },
  titleInput: {
    width: '90%',
    marginHorizontal: '5%',
    fontSize: 16,
    fontFamily: fonts.Montserrat,
  },
  input: {
    width: '90%',
    borderRadius: 5,
    padding: 3,
    marginHorizontal: '5%',
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
  },
  error: {
    fontSize: 16,
    color: 'red',
    fontFamily: fonts.Montserrat,
    fontStyle: 'italic',
    marginLeft: 20,
  },
});
