type Vehicle = {
  index: number;
  name: string;
  phone: string;
  category: 'C' | 'D' | 'S';
  coordinates: {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
  };
};
type VehiclesDefinition = {
  C: 'TRACK' | boolean;
  D: 'BUS' | boolean;
  S: 'SPECIAL' | boolean;
};
