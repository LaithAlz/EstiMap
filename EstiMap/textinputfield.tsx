import React, { useState } from 'react';
import { Colors } from './colors.js';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

interface TextInputProps {}

const TextInputField: React.FC<MyTextInputProps> = ({onChangeText, value, placeholder}) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

  },
  // <Button title="Submit" onPress={handleButtonPress} />
  input: {
    height: 50,
    // borderColor: '',
    backgroundColor: Colors.gray,
    borderWidth: 0,
    //marginBottom: 16,
    paddingLeft: 17,
    padding: 8,
    width: '95%',
    borderRadius: 30,
    opacity: 0.9,
    fontFamily: 'RabbidHighwaySignII',
  },
});

export default TextInputField;