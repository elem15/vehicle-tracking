import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import useVehicles from '../../hooks/useVehicles';
import { mapRegion } from '../../constants/initialStates';
import { View } from '../../components/Themed';
import MapFragment from '../../components/MapFragment';

export default function Map() {
  const [vehicles] = useVehicles();
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        {vehicles.map(v => (
          <MapFragment key={v.index} v={v} />
        ))}
      </MapView>
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
