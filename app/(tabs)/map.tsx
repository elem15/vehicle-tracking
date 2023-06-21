import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 59.93426,
    longitude: 30.335094,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.0421
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
