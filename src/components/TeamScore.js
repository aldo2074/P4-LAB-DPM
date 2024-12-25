import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles';

const TeamScore = ({ teamName, score, onIncrement, onDecrement, isWinner, gameEnded }) => {
  return (
    <View style={[styles.teamCard, isWinner && styles.winnerBorder]}>
      <Text style={styles.teamName}>{teamName}</Text>
      <View style={[styles.scoreContainer, isWinner && { borderColor: '#FFD700' }]}>
        <Text style={styles.score}>{score}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[
            styles.scoreButton, 
            { backgroundColor: '#FF5252' },
            (score === 0 || gameEnded) && styles.disabledButton
          ]} 
          onPress={onDecrement}
          disabled={score === 0 || gameEnded}
        >
          <Icon name="minus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.scoreButton,
            gameEnded && styles.disabledButton
          ]} 
          onPress={onIncrement}
          disabled={gameEnded}
        >
          <Icon name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamScore;