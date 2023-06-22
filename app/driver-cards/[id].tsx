import { Stack, useSearchParams } from 'expo-router';
import { Text, View } from '../../components/Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';
import useDriverCard from '../../hooks/useDriverCard';
import { vehiclesDefinition, whatsAppMsg } from '../../constants/initialStates';
import { commonStyles } from '../../styles/index.style';
import { Linking } from 'react-native';

export default function DriverCard() {
  const params = useSearchParams();
  const id = params.id as string;
  const [driver] = useDriverCard(+id);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: 'Driver card'
        }}></Stack.Screen>
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <Text style={styles.title}>
            <Text style={styles.normalText}>name: </Text>
            {driver.name}
          </Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.cardItem}>
          <Text style={styles.title}>
            <Text style={styles.normalText}>vehicle type: </Text>
            {vehiclesDefinition[driver.category]}
          </Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.cardItem}>
          <Text style={styles.title}>
            <Text style={styles.normalText}>phone number:{'\n'}</Text>
            {driver.phone}
          </Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.cardItem}>
          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => Linking.openURL(`tel:${driver.phone}`)}>
            <Text style={styles.buttonText}>Call the driver</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...commonStyles.button,
              backgroundColor: 'green'
            }}
            onPress={() => {
              let url = `whatsapp://send?text=${whatsAppMsg}&phone=${driver.phone}`;
              Linking.openURL(url);
            }}>
            <Text style={styles.buttonText}>Write to driver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    padding: 20,
    fontSize: 16,
    alignItems: 'flex-start'
  },
  cardItem: {
    flexDirection: 'row',
    margin: 2
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  normalText: {
    fontSize: 20,
    fontWeight: '500'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%'
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
