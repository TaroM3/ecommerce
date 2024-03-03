import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const InputForm = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onSelectionChange={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: { width: '100%' },
  titleInput: {},
  input: { width: '90%', borderWidth: 0 },
});
