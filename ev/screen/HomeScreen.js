import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/ev-charging.png')} style={styles.logo} />
      <Text style={styles.title}>Electric Vehicle Charging</Text>
      <Text style={styles.subtitle}>Find a charging station near you</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StationList')}>
        <Text style={styles.buttonText}>Find Stations</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34C759',
    fontFamily: 'Quicksand',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Quicksand',
  },
  button: {
    backgroundColor: '#34C759',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Quicksand',
  },
});

export default HomeScreen;