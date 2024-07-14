import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import HomeScreen from './screen/HomeScreen';
import StationListScreen from './screen/StationListScreen';

const App = () => {
  return (
    <View>
      <Link href="/home">
        <HomeScreen />
      </Link>
      <Link href="/station-list">
        <StationListScreen />
      </Link>
    </View>
  );
};

export default App;