import Colors from '../constants/Colors';
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  button: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: Colors.light.tint,
    borderRadius: 5,
    marginHorizontal: 7,
    paddingHorizontal: 10,
    paddingBottom: 5,
    color: '#fff'
  },
})