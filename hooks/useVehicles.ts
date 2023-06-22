// Get filtered vehicles from data.json

import { useEffect, useContext } from 'react';
import { VehiclesContext } from '../app/_layout';
import { initialVehicles } from '../constants/initialStates';

export default function useVehicles(isSelected?: VehiclesDefinitionBoolean) {

  // Context used because same data should be in the list and in the map
  const { vehicles, setVehicles } = useContext(VehiclesContext);

  useEffect(() => {
    if (isSelected) {
      const currentVehicles = initialVehicles.filter(v => isSelected[v.category])
      setVehicles(currentVehicles);
    }
  }, [isSelected]);

  return [vehicles]
}