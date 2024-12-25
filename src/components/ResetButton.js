import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles';

const ResetButton = ({ onReset }) => {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={onReset}>
      <Icon name="refresh" size={24} color="#ffffff" />
      <Text style={styles.resetButtonText}>Reset</Text>
    </TouchableOpacity>
  );
};

export default ResetButton;