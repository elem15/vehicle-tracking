// Get driver details from data.json

import { useEffect, useState } from 'react';
import { initialVehicles } from '../constants/initialStates';

export default function useDriverCard(id?: number) {
  const [driver, setDriver] = useState<Vehicle>(initialVehicles[0])

  useEffect(() => {
    const currentDriver = initialVehicles.find(v => v.index === id) || initialVehicles[0];
    setDriver(currentDriver);
  }, [id]);

  return [driver]
}