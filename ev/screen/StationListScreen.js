import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const StationListScreen = () => {
  const stations = [
    { id: 1, name: 'Station 1', address: 'Jl. Sudirman No. 1', distance: 2.5 },
    { id: 2, name: 'Station 2', address: 'Jl. Thamrin No. 2', distance: 5.0 },
    { id: 3, name: 'Station 3', address: 'Jl. Gatot Subroto No. 3', distance: 7.5 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charging Stations</Text>
      <FlatList
        data={stations}
        renderItem={({ item }) => (
          <View style={styles.stationItem}>
            <Text style={styles.stationName}>{item.name}</Text>
            <Text style={styles.stationAddress}>{item.address}</Text>
            <Text style={styles.stationDistance}>{item.distance} km</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34C759',
    fontFamily: 'Quicksand',
  },
  stationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  stationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34C759',
    fontFamily: 'Quicksand',
  },
  stationAddress: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Quicksand',
  },
  stationDistance: {
    fontSize: 14,
    color: '#999',
    fontFamily: 'Quicksand',
  },
});

export default StationListScreen;