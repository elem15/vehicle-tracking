import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useVehicles from '../../hooks/useVehicles';
import { mapRegion } from '../../constants/initialStates';

export default function App() {
  const [vehicles] = useVehicles();
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        {vehicles.map(v => {
          const name =
            v.category == 'C'
              ? 'truck'
              : v.category == 'D'
              ? 'bus'
              : 'ambulance';
          const color =
            v.category == 'C'
              ? 'black'
              : v.category == 'D'
              ? 'blue'
              : 'red';
          return (
            <Marker
              key={v.index}
              coordinate={v.coordinates}
              title="Marker">
              <FontAwesome
                name={name}
                size={25}
                color={color}
              />
            </Marker>
          );
        })}
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
