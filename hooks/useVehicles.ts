import { initialState } from '../constants/initialState';
import data from '../db/data.json';
import { useState, useEffect } from 'react';

export default function useVehicles(isSelected = initialState) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const loadedData = JSON.stringify(data);
    const vehicles = JSON.parse(loadedData) as Vehicle[];
    const currentVehicles = vehicles.filter(v => isSelected[v.category])
    setVehicles(currentVehicles);
  }, [isSelected]);

  return [vehicles]
}