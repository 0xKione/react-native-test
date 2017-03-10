// src/app/components/card/styles.ios.js

// Import the dependencies of the style sheet
import React, { StyleSheet } from 'react-native';

// Create the style sheet
const styles = StyleSheet.create({
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#DDD',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
  marginHorizontal: 5,
  marginTop: 10
});

// Make the style sheet available to other parts of the app
export default styles;