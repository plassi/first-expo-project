import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, text}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});

export default Button;