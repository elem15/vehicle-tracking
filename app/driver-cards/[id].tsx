import { Stack, useSearchParams } from 'expo-router';
import { Text, View } from '../../components/Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';
import useDriverCard from '../../hooks/useDriverCard';
import { vehiclesDefinition } from '../../constants/initialStates';
import { commonStyles } from '../../styles/index.style';
import { Linking } from 'react-native';
import MapView from 'react-native-maps';
import MapFragment from '../../components/MapFragment';
import { useTranslation } from 'react-i18next';

export default function DriverCard() {
  const params = useSearchParams();
  const id = params.id as string;
  const [driver] = useDriverCard(+id);
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: `${t('driver')}`
        }}></Stack.Screen>
      <View style={styles.card}>
        <MapView style={styles.map} region={driver.coordinates}>
          <MapFragment v={driver} />
        </MapView>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.cardItem}>
          <Text style={styles.title}>
            <Text style={styles.normalText}>{t('name')}: </Text>
            {driver.name}
          </Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.cardItem}>
          <Text style={styles.title}>
            <Text style={styles.normalText}>{t('vehicle')}: </Text>
            {t(vehiclesDefinition[driver.category])}
          </Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.cardItem}>
          <Text style={styles.title}>
            <Text style={styles.normalText}>
              {t('phone')}:{'\n'}
            </Text>
            {driver.phone}
          </Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.cardItem}>
          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => Linking.openURL(`tel:${driver.phone}`)}>
            <Text style={styles.buttonText}>{t('Call')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...commonStyles.button,
              backgroundColor: 'green'
            }}
            onPress={() => {
              let url = `whatsapp://send?text=${t('message')}&phone=${driver.phone}`;
              Linking.openURL(url);
            }}>
            <Text style={styles.buttonText}>{t('Write')}</Text>
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
    height: '50%'
  }
});
