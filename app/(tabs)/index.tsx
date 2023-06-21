import { StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import useVehicles from '../../hooks/useVehicles';

export default function TabOneScreen() {
  const [vehicles] = useVehicles();
  return (
    <View style={styles.cardsContainer}>
      {vehicles.map(v => (
        <TouchableOpacity>
          <Text key={v.index} style={styles.title}>
            {v.index}. {v.name} ({v.category}).
          </Text>
        </TouchableOpacity>
      ))}
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  cardsContainer: {
    marginTop: 30,
    gap: 20
  }
});
