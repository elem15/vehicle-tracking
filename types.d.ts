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
  C: 'TRACK';
  D: 'BUS';
  S: 'SPECIAL';
};
type VehiclesDefinitionBoolean = {
  C: boolean;
  D: boolean;
  S: boolean;
};
