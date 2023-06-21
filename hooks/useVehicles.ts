import data from '../db/data.json';
import { useState, useEffect } from 'react';

export default function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  useEffect(() => {
    const loadedData = JSON.stringify(data);
    const vehicles = JSON.parse(loadedData);
    setVehicles(vehicles);
  }, []);
  return [vehicles]
}