import { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Text, View } from '../../components/Themed';
import useVehicles from '../../hooks/useVehicles';
import Colors from '../../constants/Colors';
import { initialState, vehiclesDefinition } from '../../constants/initialStates';
import { useRouter } from 'expo-router';
import { commonStyles } from '../../styles/index.style';
import { useTranslation } from 'react-i18next';
export default function TabOneScreen() {
  const router = useRouter();
  const [isSelected, setSelection] = useState(initialState);
  const [applySelected, setApplySelected] = useState(initialState);
  const [vehicles] = useVehicles(applySelected);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(vehiclesDefinition)}
        horizontal
        keyExtractor={item => item}
        contentContainerStyle={{
          columnGap: 20,
          paddingBottom: 0
        }}
        renderItem={({ item }) => (
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              onPress={(isChecked: boolean) => {
                setSelection(prev => ({
                  ...prev,
                  [item]: isChecked
                }));
              }}
              fillColor={Colors.light.tint}
              style={styles.checkbox}
              isChecked={true}
            />
            <Text style={styles.label}>
              {t(vehiclesDefinition[item as keyof VehiclesDefinition])}({item})
            </Text>
          </View>
        )}></FlatList>
      <TouchableOpacity onPress={() => setApplySelected(isSelected)}>
        <Text style={{ ...commonStyles.button, backgroundColor: 'red' }}>{t('filter')}</Text>
      </TouchableOpacity>
      {vehicles.map(v => (
        <TouchableOpacity key={v.index} onPress={() => router.push(`driver-cards/${v.index}`)}>
          <Text style={styles.title}>
            {v.index}. {v.name} ({v.category}).
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    gap: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 12,
    marginLeft: -10
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingBottom: 0
  },
  checkbox: {
    alignSelf: 'baseline'
  }
});
