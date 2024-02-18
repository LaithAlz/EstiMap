import React, { useState } from 'react';
import { Colors } from './colors.js';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

interface TextInputProps {}

const SearchField: React.FC<MyTextInputProps> = () => {
  const [textInputValue, setTextInputValue] = useState<string>('');

  const handleTextInputChange = (text: string) => {
    setTextInputValue(text);
  };

  const handleButtonPress = () => {
    Alert.alert('Text Input Value', textInputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder=""
        onChangeText={handleTextInputChange}
        value={textInputValue}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  // <Button title="Submit" onPress={handleButtonPress} />
  input: {
    height: 30,
    // borderColor: '',
    backgroundColor: Colors.white_background,
    borderWidth: 0,
    //marginBottom: 16,
    paddingLeft: 17,
    padding: 8,
    width: '75%',
    borderRadius: 30,
    opacity: 0.9,
  },
});

export default SearchField;