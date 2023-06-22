import data from '../db/data.json';

export const vehiclesDefinition: VehiclesDefinition = {
  C: 'TRACK',
  D: 'BUS',
  S: 'SPECIAL'
};
export const initialState: VehiclesDefinition = {
  C: true,
  D: true,
  S: true
};
export const mapRegion = {
  latitude: 59.93426,
  longitude: 30.335094,
  latitudeDelta: 0.1922,
  longitudeDelta: 0.0921
};

const loadedData = JSON.stringify(data);
export const initialVehicles = JSON.parse(loadedData) as Vehicle[];
