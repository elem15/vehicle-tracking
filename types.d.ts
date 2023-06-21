type Vehicle = {
  index: number;
  name: string;
  phone: string;
  category: 'C' | 'D' | 'S';
  coordinates: string;
};
type VehiclesDefinition = {
  C: 'Track' | boolean;
  D: 'Bus' | boolean;
  S: 'Special' | boolean;
};
