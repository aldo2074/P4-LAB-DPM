import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
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
          style={[styles.scoreButton, { backgroundColor: '#FF5252' }, (score === 0 || gameEnded) && styles.disabledButton]} 
          onPress={onDecrement}
          disabled={score === 0 || gameEnded}
        >
          <Icon name="minus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.scoreButton, gameEnded && styles.disabledButton]} 
          onPress={onIncrement}
          disabled={gameEnded}
        >
          <Icon name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MainScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [winner, setWinner] = useState(null);

  const showWinnerAlert = (team, finalScoreA, finalScoreB) => {
    Alert.alert(
      '🏆 Pertandingan Selesai!',
      `${team} Memenangkan Pertandingan!\n\nSkor Akhir:\nTim A: ${finalScoreA}\nTim B: ${finalScoreB}`,
      [
        { text: 'Main Lagi', onPress: resetScores, style: 'cancel' },
        { text: 'OK' }
      ],
      { cancelable: false }
    );
  };

  const incrementScore = (team) => {
    if (gameEnded) return;

    if (team === 'A') {
      const newScore = scoreA + 1;
      if (newScore <= 10) {
        setScoreA(newScore);
        if (newScore === 10) {
          setGameEnded(true);
          setWinner('A');
          showWinnerAlert('Tim A', 10, scoreB);
        }
      }
    } else {
      const newScore = scoreB + 1;
      if (newScore <= 10) {
        setScoreB(newScore);
        if (newScore === 10) {
          setGameEnded(true);
          setWinner('B');
          showWinnerAlert('Tim B', scoreA, 10);
        }
      }
    }
  };

  const decrementScore = (team) => {
    if (gameEnded) return;
    if (team === 'A' && scoreA > 0) setScoreA(scoreA - 1);
    else if (team === 'B' && scoreB > 0) setScoreB(scoreB - 1);
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setGameEnded(false);
    setWinner(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="soccer" size={36} color="#FFFFFF" />
          <Text style={styles.headerTitle}>FUTSAL SCOREBOARD</Text>
        </View>
        
        <View style={styles.scoreboardContainer}>
          <View style={styles.teamsContainer}>
            <TeamScore
              teamName="Tim A"
              score={scoreA}
              onIncrement={() => incrementScore('A')}
              onDecrement={() => decrementScore('A')}
              isWinner={winner === 'A'}
              gameEnded={gameEnded}
            />
            
            <View style={styles.vsContainer}>
              <Text style={styles.vsText}>VS</Text>
            </View>
            
            <TeamScore
              teamName="Tim B"
              score={scoreB}
              onIncrement={() => incrementScore('B')}
              onDecrement={() => decrementScore('B')}
              isWinner={winner === 'B'}
              gameEnded={gameEnded}
            />

            <View style={styles.resetButtonContainer}>
              <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
                <Icon name="refresh" size={20} color="#FFFFFF" />
                <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;