import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Text, View } from '../../components/Themed';
import useVehicles from '../../hooks/useVehicles';
import Colors from '../../constants/Colors';

const vehiclesDefinition = {
  C: 'Track',
  D: 'Bus',
  S: 'Special'
};
export default function TabOneScreen() {
  const [vehicles] = useVehicles();
  const [isSelected, setSelection] = useState({
    C: true,
    D: true,
    S: true
  });

  return (
    <View style={styles.container}>
      {Object.keys(vehiclesDefinition).map(category => (
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            onPress={(isChecked: boolean) => {
              setSelection(prev => ({
                ...prev,
                [category]: isChecked
              }));
            }}
            fillColor={Colors.light.tint}
            style={styles.checkbox}
            isChecked={true}
          />
          <Text>
            {
              vehiclesDefinition[
                category as keyof typeof vehiclesDefinition
              ]
            }{' '}
            ({category})
          </Text>
        </View>
      ))}
      {vehicles.map(v => (
        <TouchableOpacity>
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
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    gap: 20
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 0
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  }
});
