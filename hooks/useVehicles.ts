import data from '../db/data.json';
import { useState, useEffect } from 'react';

export default function useVehicles(isSelected: VehiclesDefinition) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  useEffect(() => {
    const loadedData = JSON.stringify(data);
    const vehicles = JSON.parse(loadedData) as Vehicle[];
    const currentVehicles = vehicles.filter(v => {
      if (isSelected[v.category]) return true
      else return false
    })
    setVehicles(currentVehicles);
  }, [isSelected]);
  return [vehicles]
}