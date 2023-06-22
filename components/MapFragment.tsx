import { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';

export default function MapFragment({ v }: { v: Vehicle }) {
  const name = v.category == 'C' ? 'truck' : v.category == 'D' ? 'bus' : 'ambulance';
  const color = v.category == 'C' ? 'black' : v.category == 'D' ? 'blue' : 'red';
  return (
    <Marker coordinate={v.coordinates} title="Marker">
      <FontAwesome name={name} size={25} color={color} />
    </Marker>
  );
}
