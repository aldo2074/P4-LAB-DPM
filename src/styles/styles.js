import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingTop: height * 0.03,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 5,
  },
  scoreboardContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  teamsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  teamCard: {
    width: width * 0.85,
    height: height * 0.25,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  scoreContainer: {
    backgroundColor: '#F5F5F5',
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  scoreButton: {
    backgroundColor: '#4CAF50',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  disabledButton: {
    opacity: 0.5,
  },
  vsContainer: {
    backgroundColor: '#FFFFFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 4,
  },
  vsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  resetButtonContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#FF5252',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  winnerBorder: {
    borderWidth: 3,
    borderColor: '#FFD700',
  },
});

export default styles;