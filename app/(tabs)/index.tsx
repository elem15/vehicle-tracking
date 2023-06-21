import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Text, View } from '../../components/Themed';
import useVehicles from '../../hooks/useVehicles';
import Colors from '../../constants/Colors';
import {
  initialState,
  vehiclesDefinition
} from '../../constants/initialState';

export default function TabOneScreen() {
  const [isSelected, setSelection] = useState(initialState);
  const [applySelected, setApplySelected] =
    useState(initialState);
  const [vehicles] = useVehicles(applySelected);

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
              {
                vehiclesDefinition[
                  item as keyof VehiclesDefinition
                ]
              }
              ({item})
            </Text>
          </View>
        )}></FlatList>
      <TouchableOpacity
        onPress={() => setApplySelected(isSelected)}>
        <Text style={styles.button}>apply filter</Text>
      </TouchableOpacity>
      {vehicles.map(v => (
        <TouchableOpacity key={v.index}>
          <Text key={v.index} style={styles.title}>
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
    fontSize: 14,
    marginLeft: -10
  },
  button: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: Colors.light.tint,
    borderRadius: 5,
    marginLeft: 30,
    paddingHorizontal: 10,
    paddingBottom: 5,
    color: '#fff'
  },
  checkboxContainer: {
    flexDirection: 'row',
    height: 50,
    paddingBottom: 0
  },
  checkbox: {
    alignSelf: 'baseline'
  }
});
